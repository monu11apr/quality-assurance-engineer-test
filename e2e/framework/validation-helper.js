
class ValidationHelper {
    
    /**
     * Check browser has url
     * @param {*} url 
     */
    toHaveUrl(url){
        expect(browser).toHaveUrl(url)
    }

     /**
      * verify title 
      * @param {*} title 
      */
    toHaveTitle(title){
        expect(browser).toHaveTitle(title)
    }

     /**
      * check element is displayed
      * @param {} elem 
      */
    toBeDisplayed(elem){        
        expect(elem).toBeDisplayed()
    }

     /**
      * Check element is visible
      * @param {} elem 
      */
    toBeVisible(elem){
        expect(elem).toBeVisible()
    }

     /**
      * Check element exit
      * @param {} elem 
      */
    toExist(elem){
        expect(elem).toExist()
    }

    /**
     * Check Element is present
     * @param {*} elem 
     */ 
    toBePresent(elem){
        expect(elem).toBePresent();
    }

    /**
     * Check element attribute value
     * @param {*} element 
     * @param {*} attribure 
     * @param {*} value 
     */
    toHaveAttribute(element, attribure, value){
        expect(element).toHaveAttributeContaining(attribure, value)
    }
  
    /**
     * Check element has attribute value
     * @param {*} element 
     * @param {*} attribure 
     * @param {*} value 
     */
    toHaveAttributeContaining(element, attribure, value){
        expect(element).toHaveAttributeContaining(attribure, value)
    }

    /**
     * Check input box value
     * @param {*} element 
     * @param {*} value 
     */
    toHaveValue(element, value){
        expect(element).toHaveValue(value, { ignoreCase: true })
    }

    /**
     * Check input box contain value
     * @param {*} element 
     * @param {*} value 
     */
    toHaveValueContaining(element, value){
        expect(element).toHaveValue(value)
    }
  
    /**
     * Check element disabled
     * @param {*} element 
     */
    toBeDisabled(element){
        expect(element).toBeDisabled()
    }

    /**
     * Check element selected
     * @param {*} element 
     */
    toBeSelected(element){
        expect(element).toBeSelected()
    }

    /**
     * Verify element is checked
     * @param {*} element 
     */
    toBeChecked(element){
        expect(element).toBeChecked()
    }

    /**
     * Verify element has href link
     * @param {*} element 
     * @param {*} link 
     */
    toHaveHref(element, link){
        expect(element).toHaveHref(link)
    }

    /**
     * Verify element contains link
     * @param {*} element 
     * @param {*} link 
     */
    toHaveHrefContaining(element, link){
        expect(element).toHaveHrefContaining(link)
    }

    /**
     * Verify element contains Text
     * @param {*} element 
     * @param {*} text 
     */
    toHaveText(element, text){
        expect(element).toHaveText(text)
    }

    /**
     * Verify element contains text
     * @param {*} element 
     * @param {*} text 
     */
    toHaveTextContaining(element, text){
        expect(element).toHaveTextContaining(text)
    }
  
  }
  export default new ValidationHelper();