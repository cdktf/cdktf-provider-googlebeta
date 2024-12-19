# `googleDataCatalogTagTemplate` Submodule <a name="`googleDataCatalogTagTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTagTemplate <a name="GoogleDataCatalogTagTemplate" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template google_data_catalog_tag_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplate(scope Construct, id *string, config GoogleDataCatalogTagTemplateConfig) GoogleDataCatalogTagTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig">GoogleDataCatalogTagTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig">GoogleDataCatalogTagTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataCatalogTagTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogTagTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.GoogleDataCatalogTagTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.GoogleDataCatalogTagTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.GoogleDataCatalogTagTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.GoogleDataCatalogTagTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataCatalogTagTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataCatalogTagTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataCatalogTagTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogTagTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fields">Fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList">GoogleDataCatalogTagTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference">GoogleDataCatalogTagTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateIdInput">TagTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateId">TagTemplateId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fields"></a>

```go
func Fields() GoogleDataCatalogTagTemplateFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList">GoogleDataCatalogTagTemplateFieldsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleDataCatalogTagTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference">GoogleDataCatalogTagTemplateTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagTemplateIdInput`<sup>Optional</sup> <a name="TagTemplateIdInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateIdInput"></a>

```go
func TagTemplateIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TagTemplateId`<sup>Required</sup> <a name="TagTemplateId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateId"></a>

```go
func TagTemplateId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagTemplateConfig <a name="GoogleDataCatalogTagTemplateConfig" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Fields: interface{},
	TagTemplateId: *string,
	DisplayName: *string,
	ForceDelete: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.tagTemplateId">TagTemplateId</a></code> | <code>*string</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.region">Region</a></code> | <code>*string</code> | Template location region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#fields GoogleDataCatalogTagTemplate#fields}

---

##### `TagTemplateId`<sup>Required</sup> <a name="TagTemplateId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.tagTemplateId"></a>

```go
TagTemplateId *string
```

- *Type:* *string

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#tag_template_id GoogleDataCatalogTagTemplate#tag_template_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#force_delete GoogleDataCatalogTagTemplate#force_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#region GoogleDataCatalogTagTemplate#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleDataCatalogTagTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#timeouts GoogleDataCatalogTagTemplate#timeouts}

---

### GoogleDataCatalogTagTemplateFields <a name="GoogleDataCatalogTagTemplateFields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateFields {
	FieldId: *string,
	Type: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType,
	Description: *string,
	DisplayName: *string,
	IsRequired: interface{},
	Order: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.fieldId">FieldId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#field_id GoogleDataCatalogTagTemplate#field_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.type">Type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.description">Description</a></code> | <code>*string</code> | A description for this field. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for this field. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | Whether this is a required field. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.order">Order</a></code> | <code>*f64</code> | The order of this field with respect to other fields in this tag template. |

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.fieldId"></a>

```go
FieldId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#field_id GoogleDataCatalogTagTemplate#field_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.type"></a>

```go
Type GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#type GoogleDataCatalogTagTemplate#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#description GoogleDataCatalogTagTemplate#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.isRequired"></a>

```go
IsRequired interface{}
```

- *Type:* interface{}

Whether this is a required field. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#is_required GoogleDataCatalogTagTemplate#is_required}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

The order of this field with respect to other fields in this tag template.

A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#order GoogleDataCatalogTagTemplate#order}

---

### GoogleDataCatalogTagTemplateFieldsType <a name="GoogleDataCatalogTagTemplateFieldsType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateFieldsType {
	EnumType: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType,
	PrimitiveType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | enum_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.primitiveType">PrimitiveType</a></code> | <code>*string</code> | Represents primitive types - string, bool etc. |

---

##### `EnumType`<sup>Optional</sup> <a name="EnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.enumType"></a>

```go
EnumType GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#enum_type GoogleDataCatalogTagTemplate#enum_type}

---

##### `PrimitiveType`<sup>Optional</sup> <a name="PrimitiveType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.primitiveType"></a>

```go
PrimitiveType *string
```

- *Type:* *string

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#primitive_type GoogleDataCatalogTagTemplate#primitive_type}

---

### GoogleDataCatalogTagTemplateFieldsTypeEnumType <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType {
	AllowedValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues">AllowedValues</a></code> | <code>interface{}</code> | allowed_values block. |

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues"></a>

```go
AllowedValues interface{}
```

- *Type:* interface{}

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#allowed_values GoogleDataCatalogTagTemplate#allowed_values}

---

### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues {
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the enum value. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

### GoogleDataCatalogTagTemplateTimeouts <a name="GoogleDataCatalogTagTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

&googledatacatalogtagtemplate.GoogleDataCatalogTagTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#create GoogleDataCatalogTagTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#delete GoogleDataCatalogTagTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#update GoogleDataCatalogTagTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#create GoogleDataCatalogTagTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#delete GoogleDataCatalogTagTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_data_catalog_tag_template#update GoogleDataCatalogTagTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagTemplateFieldsList <a name="GoogleDataCatalogTagTemplateFieldsList" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataCatalogTagTemplateFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get"></a>

```go
func Get(index *f64) GoogleDataCatalogTagTemplateFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataCatalogTagTemplateFieldsOutputReference <a name="GoogleDataCatalogTagTemplateFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataCatalogTagTemplateFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType">PutType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutType` <a name="PutType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType"></a>

```go
func PutType(value GoogleDataCatalogTagTemplateFieldsType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetIsRequired"></a>

```go
func ResetIsRequired()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.type">Type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.type"></a>

```go
func Type() GoogleDataCatalogTagTemplateFieldsTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput"></a>

```go
func FieldIdInput() *string
```

- *Type:* *string

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput"></a>

```go
func IsRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.typeInput"></a>

```go
func TypeInput() GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *string
```

- *Type:* *string

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequired"></a>

```go
func IsRequired() interface{}
```

- *Type:* interface{}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get"></a>

```go
func Get(index *f64) GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues">PutAllowedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedValues` <a name="PutAllowedValues" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues"></a>

```go
func PutAllowedValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues"></a>

```go
func AllowedValues() GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a>

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput"></a>

```go
func AllowedValuesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

---


### GoogleDataCatalogTagTemplateFieldsTypeOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateFieldsTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataCatalogTagTemplateFieldsTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType">PutEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType">ResetEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType">ResetPrimitiveType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumType` <a name="PutEnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType"></a>

```go
func PutEnumType(value GoogleDataCatalogTagTemplateFieldsTypeEnumType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `ResetEnumType` <a name="ResetEnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType"></a>

```go
func ResetEnumType()
```

##### `ResetPrimitiveType` <a name="ResetPrimitiveType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType"></a>

```go
func ResetPrimitiveType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumType">EnumType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput">EnumTypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput">PrimitiveTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType">PrimitiveType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnumType`<sup>Required</sup> <a name="EnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumType"></a>

```go
func EnumType() GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a>

---

##### `EnumTypeInput`<sup>Optional</sup> <a name="EnumTypeInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput"></a>

```go
func EnumTypeInput() GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `PrimitiveTypeInput`<sup>Optional</sup> <a name="PrimitiveTypeInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput"></a>

```go
func PrimitiveTypeInput() *string
```

- *Type:* *string

---

##### `PrimitiveType`<sup>Required</sup> <a name="PrimitiveType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType"></a>

```go
func PrimitiveType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

---


### GoogleDataCatalogTagTemplateTimeoutsOutputReference <a name="GoogleDataCatalogTagTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googledatacatalogtagtemplate"

googledatacatalogtagtemplate.NewGoogleDataCatalogTagTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataCatalogTagTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



