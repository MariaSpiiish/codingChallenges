function solution(entryPoint) {  
    let elems = entryPoint.children;
    const regex = /[0-9]+/gm;

    for (let elem of elems) {
        if ( elem.hasAttribute('x-make')) {
            const v = elem.getAttribute('x-make');

            if ( v.indexOf('removeChildren') !== -1 ) {
                const n = +v.match(regex).join('');
                
                for (let i = 0; i < n; i++) {
                    elem.removeChild(elem.firstElementChild);
                    elem.removeAttribute('x-make');
                }

                
                
            }
        }
        if ( elem.children ) {
            for (let ch of elem.children) {
                const val = ch.getAttribute('x-make');

                if ( val.indexOf('copy') !== -1 ) {
                    const n = +val.match(regex).join('');
                    
                    
                    for (let i = 0; i < n; i++) {
                        const clone = ch.cloneNode(true);
                        clone.removeAttribute('x-make');
                        elem.append(clone);
                        ch.removeAttribute('x-make');
                    }

                    
                    
                }

                if ( val.indexOf('remove') !== -1 ) {
                    const n = +val.match(regex).join('');
                
                setTimeout(() => {
                        for (let i = 0; i < n; i++) {
                            ch.nextElementSibling.remove();
                            ch.removeAttribute('x-make');
                        }

                        
                    
                    }, 100);
                }
                    }
                }
        
            
        
    }
}

solution(document.querySelector('entry'));