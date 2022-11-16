package com.example.application.utils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.nulabinc.zxcvbn.Strength;
import com.nulabinc.zxcvbn.Zxcvbn;

public class StrongPasswordValidator implements ConstraintValidator<StrongPassword, String> {

    private static final int minStrength = 6;

    @Autowired
    private Zxcvbn zxcvbn;

    @Override
    public boolean isValid(String object, ConstraintValidatorContext constraintContext) {
        Strength strength = zxcvbn.measure(object);

        if (strength.getScore() < minStrength) {
            constraintContext
                    .buildConstraintViolationWithTemplate(
                            strength.getFeedback().getWarning())
                    .addConstraintViolation();

            return false;
        }
        return true;
    }

}