package com.fitmax.gym.repository;

import com.fitmax.gym.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {}
