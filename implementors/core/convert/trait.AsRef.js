(function() {var implementors = {};
implementors["cstr_core"] = [{"text":"impl AsRef&lt;CStr&gt; for CStr","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["heapless"] = [{"text":"impl&lt;N&gt; AsRef&lt;str&gt; for String&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;N&gt; AsRef&lt;[u8]&gt; for String&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; AsRef&lt;Vec&lt;T, N&gt;&gt; for Vec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for Vec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["heapless_bytes"] = [{"text":"impl&lt;N:&nbsp;ArrayLength&lt;u8&gt;&gt; AsRef&lt;[u8]&gt; for Bytes&lt;N&gt;","synthetic":false,"types":[]}];
implementors["littlefs2"] = [{"text":"impl AsRef&lt;str&gt; for Path","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()