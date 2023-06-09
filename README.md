# View Transition API Demo (SPA)
This is a demo of using the [View Tranisions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) in non page navigation patterns. For example, the API could easily add animations to data visualization dashboards to show how data changes over time.

![GIF](https://cdn.glitch.global/83e13573-94aa-4458-b845-892f2c4a4ebf/vt3.gif?v=1686202693009)

## Live demo
- https://uskay-vt-demo-datavis-1.glitch.me/

## How?
Each rows are assigned w/ unique `view-transition-name` CSS properties. 

![vt-name](https://cdn.glitch.global/83e13573-94aa-4458-b845-892f2c4a4ebf/vt-name.png?v=1686203562569)

This would automatically:
- Reorder elements w/ animation
- Transition the size & the color
by simply creating & adding the elements to the page w/o any complex custom animation implementations

Check out the View Transition article for more details: https://developer.chrome.com/docs/web-platform/view-transitions/

## Disclaimer
This code base is built for demo purpose only (non production ready code). Please reference as one example of how View Transitions API can be used.

---

License Apache-2.0