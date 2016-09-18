(function() {var implementors = {};
implementors["serde"] = [];implementors["bincode"] = ["impl&lt;'a,&nbsp;T&gt; <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a> for <a class='struct' href='bincode/struct.RefBox.html' title='bincode::RefBox'>RefBox</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a></span>","impl&lt;'a&gt; <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a> for <a class='struct' href='bincode/struct.StrBox.html' title='bincode::StrBox'>StrBox</a>&lt;'a&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a> for <a class='struct' href='bincode/struct.SliceBox.html' title='bincode::SliceBox'>SliceBox</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a></span>",];implementors["serde_json"] = ["impl <a class='trait' href='serde/ser/trait.Serialize.html' title='serde::ser::Serialize'>Serialize</a> for <a class='enum' href='serde_json/value/enum.Value.html' title='serde_json::value::Value'>Value</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
