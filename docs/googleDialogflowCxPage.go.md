# `google_dialogflow_cx_page`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_page`](https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page).

# `googleDialogflowCxPage` Submodule <a name="`googleDialogflowCxPage` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPage <a name="GoogleDialogflowCxPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page google_dialogflow_cx_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPage(scope Construct, id *string, config GoogleDialogflowCxPageConfig) GoogleDialogflowCxPage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig">GoogleDialogflowCxPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig">GoogleDialogflowCxPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEntryFulfillment">PutEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEventHandlers">PutEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putForm">PutForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTransitionRoutes">PutTransitionRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetEntryFulfillment">ResetEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetEventHandlers">ResetEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetForm">ResetForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTransitionRouteGroups">ResetTransitionRouteGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTransitionRoutes">ResetTransitionRoutes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEntryFulfillment` <a name="PutEntryFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEntryFulfillment"></a>

```go
func PutEntryFulfillment(value GoogleDialogflowCxPageEntryFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEntryFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a>

---

##### `PutEventHandlers` <a name="PutEventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEventHandlers"></a>

```go
func PutEventHandlers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putEventHandlers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutForm` <a name="PutForm" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putForm"></a>

```go
func PutForm(value GoogleDialogflowCxPageForm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putForm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxPageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts">GoogleDialogflowCxPageTimeouts</a>

---

##### `PutTransitionRoutes` <a name="PutTransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTransitionRoutes"></a>

```go
func PutTransitionRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.putTransitionRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntryFulfillment` <a name="ResetEntryFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetEntryFulfillment"></a>

```go
func ResetEntryFulfillment()
```

##### `ResetEventHandlers` <a name="ResetEventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetEventHandlers"></a>

```go
func ResetEventHandlers()
```

##### `ResetForm` <a name="ResetForm" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetForm"></a>

```go
func ResetForm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitionRouteGroups` <a name="ResetTransitionRouteGroups" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTransitionRouteGroups"></a>

```go
func ResetTransitionRouteGroups()
```

##### `ResetTransitionRoutes` <a name="ResetTransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.resetTransitionRoutes"></a>

```go
func ResetTransitionRoutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.GoogleDialogflowCxPage_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.GoogleDialogflowCxPage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.GoogleDialogflowCxPage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.entryFulfillment">EntryFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference">GoogleDialogflowCxPageEntryFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.eventHandlers">EventHandlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList">GoogleDialogflowCxPageEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.form">Form</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference">GoogleDialogflowCxPageFormOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference">GoogleDialogflowCxPageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRoutes">TransitionRoutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList">GoogleDialogflowCxPageTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.entryFulfillmentInput">EntryFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.eventHandlersInput">EventHandlersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.formInput">FormInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRouteGroupsInput">TransitionRouteGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRoutesInput">TransitionRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRouteGroups">TransitionRouteGroups</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryFulfillment`<sup>Required</sup> <a name="EntryFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.entryFulfillment"></a>

```go
func EntryFulfillment() GoogleDialogflowCxPageEntryFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference">GoogleDialogflowCxPageEntryFulfillmentOutputReference</a>

---

##### `EventHandlers`<sup>Required</sup> <a name="EventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.eventHandlers"></a>

```go
func EventHandlers() GoogleDialogflowCxPageEventHandlersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList">GoogleDialogflowCxPageEventHandlersList</a>

---

##### `Form`<sup>Required</sup> <a name="Form" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.form"></a>

```go
func Form() GoogleDialogflowCxPageFormOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference">GoogleDialogflowCxPageFormOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxPageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference">GoogleDialogflowCxPageTimeoutsOutputReference</a>

---

##### `TransitionRoutes`<sup>Required</sup> <a name="TransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRoutes"></a>

```go
func TransitionRoutes() GoogleDialogflowCxPageTransitionRoutesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList">GoogleDialogflowCxPageTransitionRoutesList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntryFulfillmentInput`<sup>Optional</sup> <a name="EntryFulfillmentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.entryFulfillmentInput"></a>

```go
func EntryFulfillmentInput() GoogleDialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a>

---

##### `EventHandlersInput`<sup>Optional</sup> <a name="EventHandlersInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.eventHandlersInput"></a>

```go
func EventHandlersInput() interface{}
```

- *Type:* interface{}

---

##### `FormInput`<sup>Optional</sup> <a name="FormInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.formInput"></a>

```go
func FormInput() GoogleDialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitionRouteGroupsInput`<sup>Optional</sup> <a name="TransitionRouteGroupsInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRouteGroupsInput"></a>

```go
func TransitionRouteGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TransitionRoutesInput`<sup>Optional</sup> <a name="TransitionRoutesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRoutesInput"></a>

```go
func TransitionRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TransitionRouteGroups`<sup>Required</sup> <a name="TransitionRouteGroups" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.transitionRouteGroups"></a>

```go
func TransitionRouteGroups() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPageConfig <a name="GoogleDialogflowCxPageConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	EntryFulfillment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment,
	EventHandlers: interface{},
	Form: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageForm,
	Id: *string,
	LanguageCode: *string,
	Parent: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts,
	TransitionRouteGroups: *[]*string,
	TransitionRoutes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the page, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.entryFulfillment">EntryFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a></code> | entry_fulfillment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.eventHandlers">EventHandlers</a></code> | <code>interface{}</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.form">Form</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a></code> | form block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#id GoogleDialogflowCxPage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language of the following fields in page:. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.parent">Parent</a></code> | <code>*string</code> | The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts">GoogleDialogflowCxPageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.transitionRouteGroups">TransitionRouteGroups</a></code> | <code>*[]*string</code> | Ordered list of TransitionRouteGroups associated with the page. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.transitionRoutes">TransitionRoutes</a></code> | <code>interface{}</code> | transition_routes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the page, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#display_name GoogleDialogflowCxPage#display_name}

---

##### `EntryFulfillment`<sup>Optional</sup> <a name="EntryFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.entryFulfillment"></a>

```go
EntryFulfillment GoogleDialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a>

entry_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#entry_fulfillment GoogleDialogflowCxPage#entry_fulfillment}

---

##### `EventHandlers`<sup>Optional</sup> <a name="EventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.eventHandlers"></a>

```go
EventHandlers interface{}
```

- *Type:* interface{}

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#event_handlers GoogleDialogflowCxPage#event_handlers}

---

##### `Form`<sup>Optional</sup> <a name="Form" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.form"></a>

```go
Form GoogleDialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a>

form block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#form GoogleDialogflowCxPage#form}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#id GoogleDialogflowCxPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language of the following fields in page:.

Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#language_code GoogleDialogflowCxPage#language_code}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#parent GoogleDialogflowCxPage#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxPageTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts">GoogleDialogflowCxPageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#timeouts GoogleDialogflowCxPage#timeouts}

---

##### `TransitionRouteGroups`<sup>Optional</sup> <a name="TransitionRouteGroups" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.transitionRouteGroups"></a>

```go
TransitionRouteGroups *[]*string
```

- *Type:* *[]*string

Ordered list of TransitionRouteGroups associated with the page.

Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#transition_route_groups GoogleDialogflowCxPage#transition_route_groups}

---

##### `TransitionRoutes`<sup>Optional</sup> <a name="TransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageConfig.property.transitionRoutes"></a>

```go
TransitionRoutes interface{}
```

- *Type:* interface{}

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#transition_routes GoogleDialogflowCxPage#transition_routes}

---

### GoogleDialogflowCxPageEntryFulfillment <a name="GoogleDialogflowCxPageEntryFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEntryFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}

---

### GoogleDialogflowCxPageEntryFulfillmentMessages <a name="GoogleDialogflowCxPageEntryFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEntryFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessages.property.text"></a>

```go
Text GoogleDialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageEntryFulfillmentMessagesText <a name="GoogleDialogflowCxPageEntryFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEntryFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageEventHandlers <a name="GoogleDialogflowCxPageEventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEventHandlers {
	Event: *string,
	TargetFlow: *string,
	TargetPage: *string,
	TriggerFulfillment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.event">Event</a></code> | <code>*string</code> | The name of the event to handle. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.targetPage">TargetPage</a></code> | <code>*string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.event"></a>

```go
Event *string
```

- *Type:* *string

The name of the event to handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#event GoogleDialogflowCxPage#event}

---

##### `TargetFlow`<sup>Optional</sup> <a name="TargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.targetFlow"></a>

```go
TargetFlow *string
```

- *Type:* *string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#target_flow GoogleDialogflowCxPage#target_flow}

---

##### `TargetPage`<sup>Optional</sup> <a name="TargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.targetPage"></a>

```go
TargetPage *string
```

- *Type:* *string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#target_page GoogleDialogflowCxPage#target_page}

---

##### `TriggerFulfillment`<sup>Optional</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlers.property.triggerFulfillment"></a>

```go
TriggerFulfillment GoogleDialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#trigger_fulfillment GoogleDialogflowCxPage#trigger_fulfillment}

---

### GoogleDialogflowCxPageEventHandlersTriggerFulfillment <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}

---

### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text"></a>

```go
Text GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageForm <a name="GoogleDialogflowCxPageForm" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageForm {
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#parameters GoogleDialogflowCxPage#parameters}

---

### GoogleDialogflowCxPageFormParameters <a name="GoogleDialogflowCxPageFormParameters" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageFormParameters {
	DisplayName: *string,
	EntityType: *string,
	FillBehavior: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior,
	IsList: interface{},
	Redact: interface{},
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the parameter, unique within the form. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.entityType">EntityType</a></code> | <code>*string</code> | The entity type of the parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.fillBehavior">FillBehavior</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a></code> | fill_behavior block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.isList">IsList</a></code> | <code>interface{}</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.redact">Redact</a></code> | <code>interface{}</code> | Indicates whether the parameter content should be redacted in log. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.required">Required</a></code> | <code>interface{}</code> | Indicates whether the parameter is required. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the parameter, unique within the form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#display_name GoogleDialogflowCxPage#display_name}

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#entity_type GoogleDialogflowCxPage#entity_type}

---

##### `FillBehavior`<sup>Optional</sup> <a name="FillBehavior" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.fillBehavior"></a>

```go
FillBehavior GoogleDialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a>

fill_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#fill_behavior GoogleDialogflowCxPage#fill_behavior}

---

##### `IsList`<sup>Optional</sup> <a name="IsList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.isList"></a>

```go
IsList interface{}
```

- *Type:* interface{}

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#is_list GoogleDialogflowCxPage#is_list}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.redact"></a>

```go
Redact interface{}
```

- *Type:* interface{}

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#redact GoogleDialogflowCxPage#redact}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParameters.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Indicates whether the parameter is required.

Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
Required parameters must be filled before form filling concludes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#required GoogleDialogflowCxPage#required}

---

### GoogleDialogflowCxPageFormParametersFillBehavior <a name="GoogleDialogflowCxPageFormParametersFillBehavior" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageFormParametersFillBehavior {
	InitialPromptFulfillment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment">InitialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | initial_prompt_fulfillment block. |

---

##### `InitialPromptFulfillment`<sup>Optional</sup> <a name="InitialPromptFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment"></a>

```go
InitialPromptFulfillment GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

initial_prompt_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#initial_prompt_fulfillment GoogleDialogflowCxPage#initial_prompt_fulfillment}

---

### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}

---

### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text"></a>

```go
Text GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageTimeouts <a name="GoogleDialogflowCxPageTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#create GoogleDialogflowCxPage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#delete GoogleDialogflowCxPage#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#update GoogleDialogflowCxPage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#create GoogleDialogflowCxPage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#delete GoogleDialogflowCxPage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#update GoogleDialogflowCxPage#update}.

---

### GoogleDialogflowCxPageTransitionRoutes <a name="GoogleDialogflowCxPageTransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageTransitionRoutes {
	Condition: *string,
	Intent: *string,
	TargetFlow: *string,
	TargetPage: *string,
	TriggerFulfillment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.condition">Condition</a></code> | <code>*string</code> | The condition to evaluate against form parameters or session parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.intent">Intent</a></code> | <code>*string</code> | The unique identifier of an Intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.targetPage">TargetPage</a></code> | <code>*string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to evaluate against form parameters or session parameters.

At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#condition GoogleDialogflowCxPage#condition}

---

##### `Intent`<sup>Optional</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.intent"></a>

```go
Intent *string
```

- *Type:* *string

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#intent GoogleDialogflowCxPage#intent}

---

##### `TargetFlow`<sup>Optional</sup> <a name="TargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.targetFlow"></a>

```go
TargetFlow *string
```

- *Type:* *string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#target_flow GoogleDialogflowCxPage#target_flow}

---

##### `TargetPage`<sup>Optional</sup> <a name="TargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.targetPage"></a>

```go
TargetPage *string
```

- *Type:* *string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#target_page GoogleDialogflowCxPage#target_page}

---

##### `TriggerFulfillment`<sup>Optional</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutes.property.triggerFulfillment"></a>

```go
TriggerFulfillment GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#trigger_fulfillment GoogleDialogflowCxPage#trigger_fulfillment}

---

### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}

---

### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```go
Text GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

&googledialogflowcxpage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPageEntryFulfillmentMessagesList <a name="GoogleDialogflowCxPageEntryFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEntryFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageEntryFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value GoogleDialogflowCxPageEntryFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() GoogleDialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesText">GoogleDialogflowCxPageEntryFulfillmentMessagesText</a>

---


### GoogleDialogflowCxPageEntryFulfillmentOutputReference <a name="GoogleDialogflowCxPageEntryFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEntryFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageEntryFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList">GoogleDialogflowCxPageEntryFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.messages"></a>

```go
func Messages() GoogleDialogflowCxPageEntryFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentMessagesList">GoogleDialogflowCxPageEntryFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEntryFulfillment">GoogleDialogflowCxPageEntryFulfillment</a>

---


### GoogleDialogflowCxPageEventHandlersList <a name="GoogleDialogflowCxPageEventHandlersList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageEventHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageEventHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEventHandlersOutputReference <a name="GoogleDialogflowCxPageEventHandlersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageEventHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment">PutTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTargetFlow">ResetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTargetPage">ResetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment">ResetTriggerFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerFulfillment` <a name="PutTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment"></a>

```go
func PutTriggerFulfillment(value GoogleDialogflowCxPageEventHandlersTriggerFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetTargetFlow` <a name="ResetTargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTargetFlow"></a>

```go
func ResetTargetFlow()
```

##### `ResetTargetPage` <a name="ResetTargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTargetPage"></a>

```go
func ResetTargetPage()
```

##### `ResetTriggerFulfillment` <a name="ResetTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment"></a>

```go
func ResetTriggerFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetFlowInput">TargetFlowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetPageInput">TargetPageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput">TriggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetPage">TargetPage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TriggerFulfillment`<sup>Required</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment"></a>

```go
func TriggerFulfillment() GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a>

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `TargetFlowInput`<sup>Optional</sup> <a name="TargetFlowInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetFlowInput"></a>

```go
func TargetFlowInput() *string
```

- *Type:* *string

---

##### `TargetPageInput`<sup>Optional</sup> <a name="TargetPageInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetPageInput"></a>

```go
func TargetPageInput() *string
```

- *Type:* *string

---

##### `TriggerFulfillmentInput`<sup>Optional</sup> <a name="TriggerFulfillmentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput"></a>

```go
func TriggerFulfillmentInput() GoogleDialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `TargetFlow`<sup>Required</sup> <a name="TargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetFlow"></a>

```go
func TargetFlow() *string
```

- *Type:* *string

---

##### `TargetPage`<sup>Required</sup> <a name="TargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.targetPage"></a>

```go
func TargetPage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---


### GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference <a name="GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```go
func Messages() GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageEventHandlersTriggerFulfillment">GoogleDialogflowCxPageEventHandlersTriggerFulfillment</a>

---


### GoogleDialogflowCxPageFormOutputReference <a name="GoogleDialogflowCxPageFormOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageFormOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList">GoogleDialogflowCxPageFormParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.parameters"></a>

```go
func Parameters() GoogleDialogflowCxPageFormParametersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList">GoogleDialogflowCxPageFormParametersList</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageForm">GoogleDialogflowCxPageForm</a>

---


### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---


### GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference <a name="GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages"></a>

```go
func Messages() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---


### GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference <a name="GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersFillBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment">PutInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment">ResetInitialPromptFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialPromptFulfillment` <a name="PutInitialPromptFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment"></a>

```go
func PutInitialPromptFulfillment(value GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `ResetInitialPromptFulfillment` <a name="ResetInitialPromptFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment"></a>

```go
func ResetInitialPromptFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment">InitialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput">InitialPromptFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPromptFulfillment`<sup>Required</sup> <a name="InitialPromptFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment"></a>

```go
func InitialPromptFulfillment() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a>

---

##### `InitialPromptFulfillmentInput`<sup>Optional</sup> <a name="InitialPromptFulfillmentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput"></a>

```go
func InitialPromptFulfillmentInput() GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a>

---


### GoogleDialogflowCxPageFormParametersList <a name="GoogleDialogflowCxPageFormParametersList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageFormParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageFormParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageFormParametersOutputReference <a name="GoogleDialogflowCxPageFormParametersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageFormParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageFormParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.putFillBehavior">PutFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetFillBehavior">ResetFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetIsList">ResetIsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetRedact">ResetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFillBehavior` <a name="PutFillBehavior" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.putFillBehavior"></a>

```go
func PutFillBehavior(value GoogleDialogflowCxPageFormParametersFillBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.putFillBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEntityType` <a name="ResetEntityType" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetEntityType"></a>

```go
func ResetEntityType()
```

##### `ResetFillBehavior` <a name="ResetFillBehavior" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetFillBehavior"></a>

```go
func ResetFillBehavior()
```

##### `ResetIsList` <a name="ResetIsList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetIsList"></a>

```go
func ResetIsList()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetRedact"></a>

```go
func ResetRedact()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fillBehavior">FillBehavior</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput">FillBehaviorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.isListInput">IsListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.redactInput">RedactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.isList">IsList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.redact">Redact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FillBehavior`<sup>Required</sup> <a name="FillBehavior" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fillBehavior"></a>

```go
func FillBehavior() GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference">GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `FillBehaviorInput`<sup>Optional</sup> <a name="FillBehaviorInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput"></a>

```go
func FillBehaviorInput() GoogleDialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersFillBehavior">GoogleDialogflowCxPageFormParametersFillBehavior</a>

---

##### `IsListInput`<sup>Optional</sup> <a name="IsListInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.isListInput"></a>

```go
func IsListInput() interface{}
```

- *Type:* interface{}

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.redactInput"></a>

```go
func RedactInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `IsList`<sup>Required</sup> <a name="IsList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.isList"></a>

```go
func IsList() interface{}
```

- *Type:* interface{}

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.redact"></a>

```go
func Redact() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageFormParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTimeoutsOutputReference <a name="GoogleDialogflowCxPageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTransitionRoutesList <a name="GoogleDialogflowCxPageTransitionRoutesList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageTransitionRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageTransitionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTransitionRoutesOutputReference <a name="GoogleDialogflowCxPageTransitionRoutesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageTransitionRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment">PutTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetIntent">ResetIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow">ResetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTargetPage">ResetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment">ResetTriggerFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerFulfillment` <a name="PutTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment"></a>

```go
func PutTriggerFulfillment(value GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetIntent` <a name="ResetIntent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetIntent"></a>

```go
func ResetIntent()
```

##### `ResetTargetFlow` <a name="ResetTargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow"></a>

```go
func ResetTargetFlow()
```

##### `ResetTargetPage` <a name="ResetTargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTargetPage"></a>

```go
func ResetTargetPage()
```

##### `ResetTriggerFulfillment` <a name="ResetTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment"></a>

```go
func ResetTriggerFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.intentInput">IntentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput">TargetFlowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput">TargetPageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput">TriggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.intent">Intent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetPage">TargetPage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TriggerFulfillment`<sup>Required</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment"></a>

```go
func TriggerFulfillment() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.intentInput"></a>

```go
func IntentInput() *string
```

- *Type:* *string

---

##### `TargetFlowInput`<sup>Optional</sup> <a name="TargetFlowInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput"></a>

```go
func TargetFlowInput() *string
```

- *Type:* *string

---

##### `TargetPageInput`<sup>Optional</sup> <a name="TargetPageInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput"></a>

```go
func TargetPageInput() *string
```

- *Type:* *string

---

##### `TriggerFulfillmentInput`<sup>Optional</sup> <a name="TriggerFulfillmentInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput"></a>

```go
func TriggerFulfillmentInput() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.intent"></a>

```go
func Intent() *string
```

- *Type:* *string

---

##### `TargetFlow`<sup>Required</sup> <a name="TargetFlow" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetFlow"></a>

```go
func TargetFlow() *string
```

- *Type:* *string

---

##### `TargetPage`<sup>Required</sup> <a name="TargetPage" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.targetPage"></a>

```go
func TargetPage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---


### GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference <a name="GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googledialogflowcxpage"

googledialogflowcxpage.NewGoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```go
func Messages() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPage.GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment">GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---



