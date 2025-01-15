package com.fitmax.gym.controller;

import com.fitmax.gym.model.Member;
import com.fitmax.gym.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/addMember")
    public ResponseEntity<Member> addMember(@RequestBody Member member) {
        return ResponseEntity.ok(memberService.saveMember(member));
    }

    @PutMapping("/updateMember/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable Long id, @RequestBody Member memberDetails) {
        Member member = memberService.getMemberById(id);
        if (member != null) {
            member.setName(memberDetails.getName());
            member.setAge(memberDetails.getAge());
            member.setMembershipStatus(memberDetails.getMembershipStatus());
            member.setRegisteredOn(memberDetails.getRegisteredOn());
            return ResponseEntity.ok(memberService.saveMember(member));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteMember/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/allMembers")
    public ResponseEntity<List<Member>> getAllMembers() {
        return ResponseEntity.ok(memberService.getAllMembers());
    }
}
