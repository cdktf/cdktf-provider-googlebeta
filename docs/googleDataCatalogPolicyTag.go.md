# `googleDataCatalogPolicyTag` Submodule <a name="`googleDataCatalogPolicyTag` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogPolicyTag <a name="GoogleDataCatalogPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag google_data_catalog_policy_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.NewGoogleDataCatalogPolicyTag(scope Construct, id *string, config GoogleDataCatalogPolicyTagConfig) GoogleDataCatalogPolicyTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig">GoogleDataCatalogPolicyTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig">GoogleDataCatalogPolicyTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetParentPolicyTag">ResetParentPolicyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataCatalogPolicyTagTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetId"></a>

```go
func ResetId()
```

##### `ResetParentPolicyTag` <a name="ResetParentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetParentPolicyTag"></a>

```go
func ResetParentPolicyTag()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogPolicyTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.GoogleDataCatalogPolicyTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.GoogleDataCatalogPolicyTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.GoogleDataCatalogPolicyTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.GoogleDataCatalogPolicyTag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDataCatalogPolicyTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataCatalogPolicyTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataCatalogPolicyTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogPolicyTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.childPolicyTags">ChildPolicyTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference">GoogleDataCatalogPolicyTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTagInput">ParentPolicyTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomyInput">TaxonomyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTag">ParentPolicyTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChildPolicyTags`<sup>Required</sup> <a name="ChildPolicyTags" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.childPolicyTags"></a>

```go
func ChildPolicyTags() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeouts"></a>

```go
func Timeouts() GoogleDataCatalogPolicyTagTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference">GoogleDataCatalogPolicyTagTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentPolicyTagInput`<sup>Optional</sup> <a name="ParentPolicyTagInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTagInput"></a>

```go
func ParentPolicyTagInput() *string
```

- *Type:* *string

---

##### `TaxonomyInput`<sup>Optional</sup> <a name="TaxonomyInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomyInput"></a>

```go
func TaxonomyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParentPolicyTag`<sup>Required</sup> <a name="ParentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.parentPolicyTag"></a>

```go
func ParentPolicyTag() *string
```

- *Type:* *string

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.taxonomy"></a>

```go
func Taxonomy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogPolicyTagConfig <a name="GoogleDataCatalogPolicyTagConfig" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

&googledatacatalogpolicytag.GoogleDataCatalogPolicyTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Taxonomy: *string,
	Description: *string,
	Id: *string,
	ParentPolicyTag: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name of this policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.taxonomy">Taxonomy</a></code> | <code>*string</code> | Taxonomy the policy tag is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.description">Description</a></code> | <code>*string</code> | Description of this policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#id GoogleDataCatalogPolicyTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.parentPolicyTag">ParentPolicyTag</a></code> | <code>*string</code> | Resource name of this policy tag's parent policy tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name of this policy tag.

It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#display_name GoogleDataCatalogPolicyTag#display_name}

---

##### `Taxonomy`<sup>Required</sup> <a name="Taxonomy" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.taxonomy"></a>

```go
Taxonomy *string
```

- *Type:* *string

Taxonomy the policy tag is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#taxonomy GoogleDataCatalogPolicyTag#taxonomy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of this policy tag.

It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#description GoogleDataCatalogPolicyTag#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#id GoogleDataCatalogPolicyTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentPolicyTag`<sup>Optional</sup> <a name="ParentPolicyTag" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.parentPolicyTag"></a>

```go
ParentPolicyTag *string
```

- *Type:* *string

Resource name of this policy tag's parent policy tag.

If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#parent_policy_tag GoogleDataCatalogPolicyTag#parent_policy_tag}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagConfig.property.timeouts"></a>

```go
Timeouts GoogleDataCatalogPolicyTagTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts">GoogleDataCatalogPolicyTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#timeouts GoogleDataCatalogPolicyTag#timeouts}

---

### GoogleDataCatalogPolicyTagTimeouts <a name="GoogleDataCatalogPolicyTagTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

&googledatacatalogpolicytag.GoogleDataCatalogPolicyTagTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#create GoogleDataCatalogPolicyTag#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#delete GoogleDataCatalogPolicyTag#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#update GoogleDataCatalogPolicyTag#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#create GoogleDataCatalogPolicyTag#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#delete GoogleDataCatalogPolicyTag#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_data_catalog_policy_tag#update GoogleDataCatalogPolicyTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogPolicyTagTimeoutsOutputReference <a name="GoogleDataCatalogPolicyTagTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatacatalogpolicytag"

googledatacatalogpolicytag.NewGoogleDataCatalogPolicyTagTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataCatalogPolicyTagTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataCatalogPolicyTag.GoogleDataCatalogPolicyTagTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



