
build: components index.js
				@component build --dev

dist: components
				@component build --standalone oz-scope --name oz-scope --out dist
				@uglifyjs dist/oz-scope.js -o dist/oz-scope.min.js_

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean oz-scope test
