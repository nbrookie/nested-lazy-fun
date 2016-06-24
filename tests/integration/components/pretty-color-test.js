/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'pretty-color',
  'Integration: PrettyColorComponent',
  {
    integration: true
  },
  function() {
    it('should change colors', function() {
      this.set('colorValue', 'red');
      this.render(hbs`{{pretty-color name=colorValue}}`);
      expect(this.$('div').attr('style')).to.equal('color: red');
      this.set('colorValue', 'blue');
      expect(this.$('div').attr('style')).to.equal('color: blue');
    });

    it('should be rendered with its color name', function() {
      this.set('colorValue', 'orange');
      this.render(hbs`{{pretty-color name=colorValue}}`);
      expect(this.$().text().trim()).to.equal('Pretty Color: orange');
      this.set('colorValue', 'green');
      expect(this.$().text().trim()).to.equal('Pretty Color: green');
    });

    describe("a nested thing!", function(){
      it('should be rendered with its color name of sweet!', function() {
        this.set('colorValue', 'sweet!');
        this.render(hbs`{{pretty-color name=colorValue}}`);
        expect(this.$().text().trim()).to.equal('Pretty Color: sweet!');
      });
    });

    describe("a nested thing with a beforeEach!", function(){
      beforeEach(function(){
        this.set('colorValue', 'cool');
        this.render(hbs`{{pretty-color name=colorValue}}`);
      });

      it('should be rendered with its color name of cool', function() {
        expect(this.$().text().trim()).to.equal('Pretty Color: cool');
      });

      it('should change colors', function() {
        expect(this.$('div').attr('style')).to.equal('color: cool');
      });
    });
  }
);
