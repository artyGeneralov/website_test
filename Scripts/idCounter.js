function getNextSequenceValue(sequenceName){
	let sequenceDocument = db.counters.findOneAndUpdate(
		{_id:sequenceName}, {$inc:{seq:1}}, {returnNewDocument:true});
		return sequenceDocument.seq;
	}
