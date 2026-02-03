package com.motoridersco.api.infrastructure.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

/**
 * Captura errores no controlados y devuelve JSON limpio en lugar de stacktraces HTML.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleGenericException(Exception ex) {
        // En producción, usa un logger real (Slf4j) en vez de printStackTrace
        ex.printStackTrace();
        return ResponseEntity.internalServerError().body(Map.of(
            "error", "Internal Server Error",
            "message", ex.getMessage()
        ));
    }
}