export class DbStructure {
    public datatype : boolean;  // True : From Web, False : From Folder
    public htmldata : Array<any>
    public dbname : string;
    public filename : Array<any>;
    public datauri : Array<any>;
    public date : Array<any>;
    constructor (){
        this.dbname = "";
        this.filename = [];
        this.datauri = [];
        this.date = [];
        this.htmldata = [];
    }
}

export class TableDataStructure{
    id : number;
    url : string;
    type : number;
    token: number;
    content: string;
    date: string;
    fullcontent: string;
    datauri : string;
    htmldata : string;
    constructor(){
        this.id = 0;
        this.url = "";
        this.type = 0;
        this.token = 0;
        this.content = "";
        var t = new Date(Date.now());
        this.date = t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate();
        this.fullcontent = "";
        this.htmldata = "";
    }
}
export class AnalysisDataStructure{
    form: string;
    freq: number;
    total:number;
    spec: number;
    constructor(){
        this.form ="";
        this.freq = 0;
        this.total= 0;
        this.spec = 0;
    }
}

export class ConcordancerStructure{
    url: string;
    left_context: string;
    search_terms: string;
    right_context: string;
    datauri : string;
    htmldata: string;
    constructor(){
        this.url = "";
        this.left_context = "";
        this.search_terms = "";
        this.right_context= "";
    }
}