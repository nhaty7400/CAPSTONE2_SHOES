function CartList(){
    this.itemArray = [];

    this.addToCart=(item)=>{
        this.itemArray.push(item);
    };

   this.isExist=(id)=>{
    let isExist=false;
    this.itemArray.map((item)=>{
        if(item.id===id){
            isExist=true;
        }
        return isExist;
    });
   }

    this.findIndex=(id)=>{
        let indexFind=-1;
        this.itemArray.map((item,index)=>{
            if(item.id===id){
                indexFind=index;
            }
        });
        return indexFind;
    }

    this.deleteItem=(id)=>{
        let index=this.findIndex(id);
        if(index>-1){
            this.itemArray.splice(index,1);
        }
    };

    this.quantityUp=(item)=>{
        item.quantityOrder++;
    }
}