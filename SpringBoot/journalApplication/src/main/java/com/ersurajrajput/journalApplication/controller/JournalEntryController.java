package com.ersurajrajput.journalApplication.controller;

import com.ersurajrajput.journalApplication.entity.JournalEntry;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@RestController
@RequestMapping("/journal")
public class JournalEntryController {



    @GetMapping
    public ArrayList<JournalEntry> getAll(){

    }

    @PostMapping
    public JournalEntry saveJournal(@RequestBody JournalEntry journalEntry){

    }

    @PutMapping("/{id}")
    public JournalEntry editJournal(@PathVariable long id, @RequestBody JournalEntry journalEntry){

    }
    @DeleteMapping("/{id}")
    public boolean deleteJournal(@PathVariable long id){

    }
    @GetMapping("/{id}")
    public JournalEntry getById(@PathVariable long id){

    }



}
