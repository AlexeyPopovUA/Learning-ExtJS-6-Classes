Ext.define("Example.example.Child", function (Class) {

    /**
     * Private members
     */

    /**
     * Reference to the current instance
     */
    var instance;

    function privateFunctionChild() {
        return "privateFunctionChild";
    }

    function privateFunctionChildSeesOwnPublic() {
        return instance.publicPropertyChild;
    }

    function privateFunctionChildSeesParentPublic() {
        return instance.publicPropertyParent;
    }

    function privateFunctionThis() {
        return this;
    }

    function privateFunctionInstance() {
        return instance;
    }

    var privatePropertyChild = "privatePropertyChild";

    /**
     * Public members
     */
    return {
        extend: 'Example.example.Parent',

        statics: {
            staticPropertyChild: "staticPropertyChild"
        },

        constructor: function () {
            instance = this;

            this.callParent(arguments);
        },

        publicMethodSeesStatics: function () {
            return Class.staticPropertyChild;
        },

        publicMethodChild: function () {
            return "publicMethodChild";
        },

        publicMethodSeesPrivate: function () {
            return privatePropertyChild;
        },

        callChildPublicFromPrivate: function () {
            return privateFunctionChildSeesOwnPublic();
        },

        callParentPublicFromPrivate: function () {
            return privateFunctionChildSeesParentPublic();
        },

        callChildPrivateThis: function () {
            return privateFunctionThis();
        },

        callChildPrivateMe: function () {
            return privateFunctionInstance();
        },

        publicPropertyChild: "publicPropertyChild"
    };
});