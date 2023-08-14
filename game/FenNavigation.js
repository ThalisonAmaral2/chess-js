class FenNavigation {
    constructor() {
      this.fenHistory = [];
      this.currentIndex = -1;
    }
  
    push(fen) {
      this.fenHistory.push(fen);
      this.currentIndex++;
    }
  
    pop() {
      if (this.currentIndex >= 0) {
        const poppedItem = this.fenHistory.pop();
        this.currentIndex--;
        return poppedItem;
      }
      return null;
    }
  
    peek() {
      if (this.currentIndex >= 0) {
        return this.fenHistory[this.currentIndex];
      }
      return null;
    }
  
    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        return this.fenHistory[this.currentIndex];
      }
      return null;
    }
  
    next() {
      if (this.currentIndex < this.fenHistory.length - 1) {
        this.currentIndex++;
        return this.fenHistory[this.currentIndex];
      }
      return null;
    }
  
    size() {
      return this.fenHistory.length;
    }
  
    isEmpty() {
      return this.fenHistory.length === 0;
    }
}

module.exports = FenNavigation