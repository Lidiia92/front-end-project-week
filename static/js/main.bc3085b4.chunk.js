(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(25),r=n.n(s),i=n(154),l=(n(80),n(72)),c=n(28),d=n(71),u=n(7),p=n(8),m=n(10),h=n(9),f=n(11),g=n(18),v=n.n(g),E=n(153),b=n(73),N=n(59),y=(n(14),function(e){return o.a.createElement("div",{className:"note-body"},o.a.createElement("h2",null,e.note.title),o.a.createElement("p",null,e.note.textBody))}),j=function(e){return o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"dropbtn"},"Sort By",o.a.createElement("span",null,"...")),o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("p",{onClick:e.sortedByTitle},"Name"),o.a.createElement("p",{onClick:e.sortedByMostRecent},"Most recent")))},C=n(60),x=n(30),O=n(63);function w(){var e=Object(N.a)(["\n  width: 300px;\n  margin-bottom: 15px;\n  margin-right: 30px;\n  background: #fff;\n  height: 300px;\n  border: 1px solid #A9A9A9;\n  border-radius: 2px;\n  text-decoration: none;\n  overflow: hidden;\n  transition: all .2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  }\n"]);return w=function(){return e},e}Object(C.a)(O.a)(w());var k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).onDragEnd=function(e){},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log("notes list inside Notes.js",this.props.notes),o.a.createElement("div",{className:"notes-container"},o.a.createElement("div",{className:"heading-flex-wrapper"},o.a.createElement("h2",{className:"notes-heading"},"Your notes:"),o.a.createElement("input",{className:"main-input",type:"text",placeholder:"Search",value:this.props.filter,onChange:this.props.handleInputChange}),o.a.createElement(j,{sortedByTitle:this.props.sortedByTitle,sortedByMostRecent:this.props.sortedByMostRecent})),o.a.createElement(x.a,{onDragEnd:this.onDragEnd},o.a.createElement(x.c,{droppableId:"dnd-container"},function(t){return o.a.createElement("div",Object.assign({className:"note-cards",ref:t.innerRef},t.droppableProps),e.props.noteData.map(function(e,t){return o.a.createElement(x.b,{draggableId:e._id,index:t,key:e._id||e.title},function(t){return o.a.createElement("div",Object.assign({className:"note"},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),o.a.createElement(O.a,{className:"note-link",to:"/get/".concat(e._id)},o.a.createElement(y,{note:e})))})}),t.placeholder)})))}}]),t}(a.Component),B=n(17),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).clearState=function(){n.setState({title:"",textBody:""})},n.handleInputChange=function(e){n.setState(Object(B.a)({},e.target.name,e.target.value))},n.state={title:"",textBody:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"form-container"},o.a.createElement("h2",null,"Create New Note:"),o.a.createElement("form",{onSubmit:function(t){e.props.addNote(t,e.state),e.clearState()}},o.a.createElement("input",{onChange:this.handleInputChange,placeholder:"Note Title",value:this.state.title,name:"title",required:!0}),o.a.createElement("textarea",{rows:"20",onChange:this.handleInputChange,placeholder:"Note Content",value:this.state.textBody,name:"textBody",required:!0}),o.a.createElement("button",{className:"nav-link nav-link-sm",type:"submit"},"Save")))}}]),t}(a.Component),_=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).clearState=function(){n.setState({title:"",textBody:""})},n.handleInputChange=function(e){n.setState(Object(B.a)({},e.target.name,e.target.value))},n.state={title:n.props.title,textBody:n.props.textBody,_id:n.props._id},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"form-container sm-padding"},o.a.createElement("h2",null,"Edit Note:"),o.a.createElement("form",{onSubmit:function(t){e.props.editNote(t,e.state,e.state._id),e.clearState(),e.props.history.push("/")}},o.a.createElement("input",{onChange:this.handleInputChange,placeholder:"Note Title",value:this.state.title,name:"title"}),o.a.createElement("textarea",{rows:"20",onChange:this.handleInputChange,placeholder:"Note Content",value:this.state.textBody,name:"textBody"}),o.a.createElement("button",{className:"nav-link nav-link-sm",type:"submit"},"Update")))}}]),t}(a.Component),D=function(e){return console.log("checking if history is here",e.history),o.a.createElement("div",{className:"delete-view"},o.a.createElement("div",{className:"delete-box"},o.a.createElement("h3",null,"Are you 100% positive you want to delete this Note?"),o.a.createElement("div",{className:"btn-container"},o.a.createElement(E.a,{to:"/",onClick:function(t){e.deleteNote(t,e._id),e.history.push("/")},className:"nav-link nav-link-sm nav-link-red"},"100% Positive"),o.a.createElement("button",{onClick:e.toggleDeleteView,className:"nav-link nav-link-sm nav-link-sm-height"},"Negative"))))},I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggleDeleteView=function(){var e=n.state.deleteView;e=!0!==e,n.setState({deleteView:e})},n.state={title:"",textBody:"",_id:"",deleteView:!1},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.notes.length){console.log("noteView - note",this.props.notes);var t=this.props.notes.find(function(t){return t._id==e.props.match.params._id});this.setState({title:t.title,textBody:t.textBody,_id:t._id})}}},{key:"render",value:function(){var e=this;return this.props.notes.length?(console.log("test 2",this.props.notes),o.a.createElement("div",{className:"note-view"},o.a.createElement(b.a,{exact:!0,path:"/get/:_id",render:function(t){return o.a.createElement("div",t,o.a.createElement("div",{className:"edit-delete-container"},o.a.createElement(E.a,{className:"edit-delete",to:"/get/".concat(e.state._id,"/edit")},"edit"),o.a.createElement("div",{onClick:e.toggleDeleteView,className:"edit-delete"},"delete")),o.a.createElement("h2",null,e.state.title),o.a.createElement("p",null,e.state.textBody))}}),o.a.createElement(b.a,{exact:!0,path:"/get/:_id/edit",render:function(t){return o.a.createElement(_,Object.assign({},t,{title:e.state.title,textBody:e.state.textBody,_id:e.state._id,editNote:e.props.editNote}))}}),this.state.deleteView&&o.a.createElement(D,{toggleDeleteView:this.toggleDeleteView,deleteNote:this.props.deleteNote,_id:this.state._id,history:this.props.history}))):o.a.createElement("h1",null,"Loading...")}}]),t}(a.Component),V=n(70),L=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).addNote=function(e,t){e.preventDefault(),console.log(t),v.a.post("https://fe-notes.herokuapp.com/note/create",t).then(function(e){t._id=e.data.success,n.setState({notes:Object(d.a)(n.state.notes).concat([t])}),console.log("response data app.js",e.data.success,t)}).catch(function(e){return console.log(e)})},n.editNote=function(e,t,a){e.preventDefault();var o=n.state.notes.map(function(e){return e._id==a?t:e});console.log("newNotes",o),v.a.put("https://fe-notes.herokuapp.com/note/edit/".concat(a),t).then(function(e){console.log("edit note in app.js",e.data),n.setState({notes:o})}).catch(function(e){return console.log(e)})},n.deleteNote=function(e,t){e.preventDefault();var a=n.state.notes.filter(function(e){return e._id!==t});v.a.delete("https://fe-notes.herokuapp.com/note/delete/".concat(t)).then(function(e){console.log("response in delete in App.js",e),n.setState({notes:a})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){n.setState({filter:e.target.value})},n.getFilteredNotes=function(){return""===n.state.filter?n.state.notes:n.state.notes.filter(function(e){return e.title.toLowerCase().includes(n.state.filter.toLowerCase())})},n.sortedByTitle=function(){console.log("sorted function runs");var e=n.state.notes.slice().sort(function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?-1:e.title.toLowerCase()>t.title.toLowerCase()?1:0});n.setState(Object(c.a)({},n.state,{notes:e})),console.log(e)},n.sortedByMostRecent=function(){var e=n.state.notesCopy.slice().reverse();n.setState(Object(c.a)({},n.state,{notes:e}))},n.onDragEnd=function(e){if(e.destination){n.setState(Object(c.a)({},n.state,{notes:function(){var e=n.state.notes.slice(),t=o.source.index,a=o.destination.index,o=Array.from(e),s=o.splice(t,1),r=Object(l.a)(s,1)[0];return o.splice(a,0,r),o}}))}},n.state={notes:[],notesCopy:[],filter:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://fe-notes.herokuapp.com/note/get/all").then(function(t){console.log(t),e.setState({notes:t.data,notesCopy:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return console.log("notesCopy",this.state.notesCopy),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"main-container"},o.a.createElement("nav",{className:"main-nav"},o.a.createElement("h1",{className:"nav-header"},"Lambda",o.a.createElement("br",null)," Notes"),o.a.createElement(E.a,{className:"nav-link",to:"/"},"View your notes"),o.a.createElement(E.a,{className:"nav-link",to:"/create"},"+ Create New Note")),o.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return o.a.createElement("div",null,o.a.createElement(k,Object.assign({},t,{notes:e.state.notes,filter:e.state.filter,handleInputChange:e.handleInputChange,noteData:e.getFilteredNotes(),sortedByTitle:e.sortedByTitle,sortedByMostRecent:e.sortedByMostRecent,onDragEnd:e.onDragEnd})),o.a.createElement("div",{className:"cvslink"},o.a.createElement(V.CSVLink,{className:"cvslink-a",data:e.state.notesCopy},"Download Notes")))}}),o.a.createElement(b.a,{path:"/get/:_id",render:function(t){return o.a.createElement(I,Object.assign({},t,{notes:e.state.notes,editNote:e.editNote,deleteNote:e.deleteNote}))}}),o.a.createElement(b.a,{path:"/create",render:function(t){return o.a.createElement(S,Object.assign({},t,{notes:e.state.notes,addNote:e.addNote}))}})))}}]),t}(a.Component);r.a.render(o.a.createElement(i.a,null,o.a.createElement(L,null)),document.getElementById("root"))},75:function(e,t,n){e.exports=n(152)},80:function(e,t,n){}},[[75,2,1]]]);
//# sourceMappingURL=main.bc3085b4.chunk.js.map