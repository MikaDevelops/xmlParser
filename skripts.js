class SimpleXMLParser{

    parsedObject = {
        parsingSuccesful: false,
        prolog: {
            version:null,
            encoding: null
        }
    };

    #cursor = null;

    constructor(xmlString){
        this.#makeObject(xmlString);
        this.cursor = 0;
    }

    getParsedObject(){
        return this.parsedObject;
    }

    /**
     * 
     * @param {string} xmlString 
     */
    #makeObject(xmlString){
        prolog = readProlog(xmlString);
        if (prolog){
            this.parsedObject.prolog=prolog;
        }
    }

    /**
     * 
     * @param {string} xmlString
     * 
     */
    #readProlog(xmlString){


        let prologStartIndex = xmlString.search("<\\?");
        if (prologStartIndex < 0) return null;

        let prologEndIndex = xmlString.search("\\?>");
        if (prologStartIndex < 0) return null;

        let prologLine = xmlString.slice(prologStartIndex+2, prologEndIndex)
            .replaceAll("\n", " ").replaceAll("\t", " ");

        let prologCursor = 0;
        let prologEndCursor = prologLine.indexOf(" ");

        let docType = prologLine.slice(prologCursor, prologEndCursor);
        prologCursor = prologLine.slice(prologEndCursor).search(/[A-Za-z]/);
        


    }


}