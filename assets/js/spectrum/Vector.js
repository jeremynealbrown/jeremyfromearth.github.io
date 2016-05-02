(function() {
  define(function() {
    var Vector;
    return Vector = (function() {
      Vector.Zero = new Vector(0, 0);

      function Vector(x1, y1) {
        this.x = x1 != null ? x1 : 0;
        this.y = y1 != null ? y1 : 0;
      }

      Vector.prototype.length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };

      Vector.prototype.add = function(v) {
        return new Vector(this.x + v.x, this.y + v.y);
      };

      Vector.prototype.sub = function(v) {
        return new Vector(this.x - v.x, this.y - v.y);
      };

      Vector.prototype.div = function(n) {
        return new Vector(this.x / n, this.y / n);
      };

      Vector.prototype.mult = function(v) {
        return new Vector(this.x * v.x, this.y * v.y);
      };

      Vector.prototype.scale = function(n) {
        return new Vector(this.x * n, this.y * n);
      };

      Vector.prototype.distance = function(v) {
        var dx, dy;
        dx = x - v.x;
        dy = y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
      };

      Vector.prototype.normalized = function(v) {
        var len;
        len = this.length();
        if (len === 0.0) {
          return this.Zero();
        } else {
          return this.div(len);
        }
      };

      return Vector;

    })();
  });

}).call(this);