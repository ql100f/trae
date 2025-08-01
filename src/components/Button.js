/**
 * 按钮组件
 */

class Button {
  /**
   * 创建按钮实例
   * @param {Object} options - 按钮配置选项
   * @param {string} options.text - 按钮文本
   * @param {string} options.type - 按钮类型 (primary, success, error)
   * @param {Function} options.onClick - 点击事件处理函数
   * @param {boolean} options.disabled - 是否禁用
   */
  constructor(options = {}) {
    this.text = options.text || 'Button';
    this.type = options.type || 'primary';
    this.onClick = options.onClick || (() => {});
    this.disabled = options.disabled || false;
    this.element = null;
  }

  /**
   * 渲染按钮
   * @param {HTMLElement} container - 容器元素
   * @returns {HTMLElement} 按钮元素
   */
  render(container) {
    // 创建按钮元素
    this.element = document.createElement('button');
    this.element.textContent = this.text;
    this.element.className = `btn btn-${this.type}`;
    
    // 设置禁用状态
    if (this.disabled) {
      this.element.disabled = true;
      this.element.classList.add('btn-disabled');
    }
    
    // 添加点击事件
    this.element.addEventListener('click', this.onClick);
    
    // 添加到容器
    if (container) {
      container.appendChild(this.element);
    }
    
    return this.element;
  }

  /**
   * 更新按钮文本
   * @param {string} text - 新的按钮文本
   */
  setText(text) {
    this.text = text;
    if (this.element) {
      this.element.textContent = text;
    }
  }

  /**
   * 启用或禁用按钮
   * @param {boolean} isDisabled - 是否禁用
   */
  setDisabled(isDisabled) {
    this.disabled = isDisabled;
    
    if (this.element) {
      this.element.disabled = isDisabled;
      
      if (isDisabled) {
        this.element.classList.add('btn-disabled');
      } else {
        this.element.classList.remove('btn-disabled');
      }
    }
  }
}

module.exports = Button;