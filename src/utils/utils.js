/**
 * 设置rem
 * @param pwidth
 * @param prem
 */
export function getRem (pwidth, prem) {
    let html = document.getElementsByTagName('html')[0];
    let oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth / pwidth * prem + 'px'
}