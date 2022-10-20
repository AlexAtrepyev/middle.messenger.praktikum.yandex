export default `
<div class="input">
  <label class="input__label">{{ label }}</label>
  <input class="input__field" type="{{type}}" name="{{name}}" onfocus="{{checkValidity}}" onblur="{{checkValidity}}">
</div>
`;
