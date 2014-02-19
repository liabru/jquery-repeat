/**
* jquery.repeat.js
* http://brm.io/jquery-repeat/
* License: MIT
*/

(function($) {

    $.fn.repeat = function(n, target, deepClone) {
        if (n <= 0)
            return;

        var $this = $(this),
            $clones = $(),
            groups = [],
            $group = $(),
            $lastParent = $this.first().parent();

        // group by parent

        $this.each(function() {
            var $that = $(this),
                $parent = $that.parent();

            if ($parent[0] === $lastParent[0]) {
                $group = $group.add($that);
            } else {
                groups.push($group);
                $group = $(this);
            }

            $lastParent = $parent;
        });

        groups.push($group);

        // clone each group n times

        $.each(groups, function(pos, $group) {
            for (var i = 0; i < n; i++) {
                var $clone = $group.clone(deepClone);

                $clones = $clones.add($clone);

                if (target) {
                    target.append($clone);
                } else {
                    // insert clone directly after the last item in the group
                    $group.last().after($clone);
                }
            }
        });

        return $clones;
    };

})(jQuery);