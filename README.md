# Attrbreeze

> A minimal atomic CSS stylesheet without a compilation step.

Messing around with using [Chrome 133 (beta)'s new "advanced" `attr()`](https://developer.chrome.com/blog/advanced-attr) to create dynamic utility ~~classes~~ attributes in CSS. Think Tailwind CSS or UnoCSS (specifically inspired by UnoCSS's "attributify" mode), but the utility classes/attributes are set once and can be used with any variant.

For the following HTML, Tailwind needs the following:

```html
<div class="px-8 px-6 px-4 px-2"></div>
```

```css
.px-2 {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}
.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.px-6 {
	padding-left: 1.5rem;
	padding-right: 1.5rem;
}
.px-8 {
	padding-left: 2rem;
	padding-right: 2rem;
}
```

Whereas Attrbreeze, for the following HTML translation, only needs one declaration:

```html
<div px="2rem" px="1.5rem" px="1rem" px="0.5rem"></div>
```

```css
[px] {
	padding-left: attr(px type(<length> | <percentage>));
	padding-right: attr(px type(<length> | <percentage>));
}
```

> [!NOTE]
> While Attrbreeze only _needs_ this one declaration for all `px` attributes/classes, any use of it includes all other utility attributes. This is unlike Tailwind, which would purge out any unused utilities and leave you with a smaller end footprint.

Attrbreeze scales better with larger projects, since more variation of utility attributes usually means more classes in the compiled stylesheet, whereas the pre-compiled Attrbreeze stylesheet stays constant.
