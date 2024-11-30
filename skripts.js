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
        let prolog = this.#readProlog(xmlString);
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

        // find all equals
        let equal_signs = prologLine.match("=").length;

        for (let i=0; i<equal_signs;i++){
            prologCursor = prologLine.slice(prologEndCursor).search(/[A-Za-z]/)+prologCursor;
            prologEndCursor = prologLine.slice(prologEndCursor).search("=")+prologEndCursor;
            
            console.log(prologCursor, prologEndCursor)
        }

        // prologCursor = prologLine.slice(prologEndCursor).search(/[A-Za-z]/)+prologEndCursor;
        // prologEndCursor = prologLine.slice(prologCursor).search("=")+prologCursor;

        // console.log(docType, prologCursor, prologEndCursor);

    }


}