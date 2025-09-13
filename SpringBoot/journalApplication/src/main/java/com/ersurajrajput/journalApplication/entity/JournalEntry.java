package com.ersurajrajput.journalApplication.entity;


import lombok.*;
import org.bson.types.ObjectId;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class JournalEntry {
    private ObjectId id;
    private String title;
    private String description;
    private String dateTime;
}


