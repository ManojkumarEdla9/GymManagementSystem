package com.fitmax.gym.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
 
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests(auth -> auth
            		 .requestMatchers("/h2-console/**").permitAll() // Allow H2 console
                     .anyRequest().authenticated()
                .requestMatchers("/api/auth/**").permitAll() // Allow auth endpoints without login
                .requestMatchers("/api/admin/**").hasRole("ADMIN") // Admin-only access
                .requestMatchers("/api/member/**").hasRole("MEMBER") // Member-only access
                .requestMatchers("/h2-console/**").permitAll() // Allow H2 console
                .anyRequest().authenticated()
            )
            .headers(headers -> headers.frameOptions().disable()); // Allow frames for H2 console

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class).build();
    }
}
