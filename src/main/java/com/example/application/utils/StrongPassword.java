package com.example.application.utils;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR,
        ElementType.PARAMETER, ElementType.TYPE_USE })
@Constraint(validatedBy = { StrongPasswordValidator.class })
public @interface StrongPassword {

    int minStrength() default 6;

    String message() default "Please enter a strong password";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
