package com.ersurajrajput.journalApplication.repository;

import com.ersurajrajput.journalApplication.entity.JournalEntry;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JournalRepository extends MongoRepository<ObjectId, JournalEntry> {

}
