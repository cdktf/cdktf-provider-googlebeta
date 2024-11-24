# `googleFirebaseHostingVersion` Submodule <a name="`googleFirebaseHostingVersion` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingVersion <a name="GoogleFirebaseHostingVersion" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version google_firebase_hosting_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersion(scope Construct, id *string, config GoogleFirebaseHostingVersionConfig) GoogleFirebaseHostingVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig">GoogleFirebaseHostingVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig">GoogleFirebaseHostingVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig"></a>

```go
func PutConfig(value GoogleFirebaseHostingVersionConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseHostingVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.GoogleFirebaseHostingVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.GoogleFirebaseHostingVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.GoogleFirebaseHostingVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.GoogleFirebaseHostingVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseHostingVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseHostingVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseHostingVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config"></a>

```go
func Config() GoogleFirebaseHostingVersionConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseHostingVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput"></a>

```go
func ConfigInput() GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingVersionConfig <a name="GoogleFirebaseHostingVersionConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SiteId: *string,
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config"></a>

```go
Config GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseHostingVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

### GoogleFirebaseHostingVersionConfigA <a name="GoogleFirebaseHostingVersionConfigA" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionConfigA {
	Redirects: interface{},
	Rewrites: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects">Redirects</a></code> | <code>interface{}</code> | redirects block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites">Rewrites</a></code> | <code>interface{}</code> | rewrites block. |

---

##### `Redirects`<sup>Optional</sup> <a name="Redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects"></a>

```go
Redirects interface{}
```

- *Type:* interface{}

redirects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}

---

##### `Rewrites`<sup>Optional</sup> <a name="Rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites"></a>

```go
Rewrites interface{}
```

- *Type:* interface{}

rewrites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}

---

### GoogleFirebaseHostingVersionConfigRedirects <a name="GoogleFirebaseHostingVersionConfigRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionConfigRedirects {
	Location: *string,
	StatusCode: *f64,
	Glob: *string,
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location">Location</a></code> | <code>*string</code> | The value to put in the HTTP location header of the response. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode">StatusCode</a></code> | <code>*f64</code> | The status HTTP code to return in the response. It must be a valid 3xx status code. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob">Glob</a></code> | <code>*string</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex">Regex</a></code> | <code>*string</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location"></a>

```go
Location *string
```

- *Type:* *string

The value to put in the HTTP location header of the response.

The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional * to capture the rest of the URL. For example:

```hcl
redirects {
  glob = "/:capture*"
  status_code = 302
  location = "https://example.com/foo/:capture"
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#location GoogleFirebaseHostingVersion#location}

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

The status HTTP code to return in the response. It must be a valid 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#status_code GoogleFirebaseHostingVersion#status_code}

---

##### `Glob`<sup>Optional</sup> <a name="Glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob"></a>

```go
Glob *string
```

- *Type:* *string

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRewrites <a name="GoogleFirebaseHostingVersionConfigRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionConfigRewrites {
	Function: *string,
	Glob: *string,
	Path: *string,
	Regex: *string,
	Run: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function">Function</a></code> | <code>*string</code> | The function to proxy requests to. Must match the exported function name exactly. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob">Glob</a></code> | <code>*string</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path">Path</a></code> | <code>*string</code> | The URL path to rewrite the request to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex">Regex</a></code> | <code>*string</code> | The user-supplied RE2 regular expression to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | run block. |

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function"></a>

```go
Function *string
```

- *Type:* *string

The function to proxy requests to. Must match the exported function name exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#function GoogleFirebaseHostingVersion#function}

---

##### `Glob`<sup>Optional</sup> <a name="Glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob"></a>

```go
Glob *string
```

- *Type:* *string

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path"></a>

```go
Path *string
```

- *Type:* *string

The URL path to rewrite the request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#path GoogleFirebaseHostingVersion#path}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run"></a>

```go
Run GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#run GoogleFirebaseHostingVersion#run}

---

### GoogleFirebaseHostingVersionConfigRewritesRun <a name="GoogleFirebaseHostingVersionConfigRewritesRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionConfigRewritesRun {
	ServiceId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId">ServiceId</a></code> | <code>*string</code> | User-defined ID of the Cloud Run service. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region">Region</a></code> | <code>*string</code> | Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied. |

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

User-defined ID of the Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region"></a>

```go
Region *string
```

- *Type:* *string

Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}

---

### GoogleFirebaseHostingVersionTimeouts <a name="GoogleFirebaseHostingVersionTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

&googlefirebasehostingversion.GoogleFirebaseHostingVersionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingVersionConfigAOutputReference <a name="GoogleFirebaseHostingVersionConfigAOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseHostingVersionConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects">PutRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites">PutRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects">ResetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites">ResetRewrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedirects` <a name="PutRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects"></a>

```go
func PutRedirects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRewrites` <a name="PutRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites"></a>

```go
func PutRewrites(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRedirects` <a name="ResetRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects"></a>

```go
func ResetRedirects()
```

##### `ResetRewrites` <a name="ResetRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites"></a>

```go
func ResetRewrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects">Redirects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites">Rewrites</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput">RedirectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput">RewritesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Redirects`<sup>Required</sup> <a name="Redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects"></a>

```go
func Redirects() GoogleFirebaseHostingVersionConfigRedirectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a>

---

##### `Rewrites`<sup>Required</sup> <a name="Rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites"></a>

```go
func Rewrites() GoogleFirebaseHostingVersionConfigRewritesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a>

---

##### `RedirectsInput`<sup>Optional</sup> <a name="RedirectsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput"></a>

```go
func RedirectsInput() interface{}
```

- *Type:* interface{}

---

##### `RewritesInput`<sup>Optional</sup> <a name="RewritesInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput"></a>

```go
func RewritesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---


### GoogleFirebaseHostingVersionConfigRedirectsList <a name="GoogleFirebaseHostingVersionConfigRedirectsList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigRedirectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseHostingVersionConfigRedirectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get"></a>

```go
func Get(index *f64) GoogleFirebaseHostingVersionConfigRedirectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseHostingVersionConfigRedirectsOutputReference <a name="GoogleFirebaseHostingVersionConfigRedirectsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigRedirectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseHostingVersionConfigRedirectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob">ResetGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlob` <a name="ResetGlob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob"></a>

```go
func ResetGlob()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput">GlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob">Glob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlobInput`<sup>Optional</sup> <a name="GlobInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput"></a>

```go
func GlobInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `Glob`<sup>Required</sup> <a name="Glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob"></a>

```go
func Glob() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseHostingVersionConfigRewritesList <a name="GoogleFirebaseHostingVersionConfigRewritesList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigRewritesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseHostingVersionConfigRewritesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get"></a>

```go
func Get(index *f64) GoogleFirebaseHostingVersionConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseHostingVersionConfigRewritesOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigRewritesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseHostingVersionConfigRewritesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob">ResetGlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun">ResetRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRun` <a name="PutRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun"></a>

```go
func PutRun(value GoogleFirebaseHostingVersionConfigRewritesRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetGlob` <a name="ResetGlob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob"></a>

```go
func ResetGlob()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetRun` <a name="ResetRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun"></a>

```go
func ResetRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput">GlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput">RunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob">Glob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run"></a>

```go
func Run() GoogleFirebaseHostingVersionConfigRewritesRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a>

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `GlobInput`<sup>Optional</sup> <a name="GlobInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput"></a>

```go
func GlobInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput"></a>

```go
func RunInput() GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Glob`<sup>Required</sup> <a name="Glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob"></a>

```go
func Glob() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleFirebaseHostingVersionConfigRewritesRunOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesRunOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionConfigRewritesRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseHostingVersionConfigRewritesRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---


### GoogleFirebaseHostingVersionTimeoutsOutputReference <a name="GoogleFirebaseHostingVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebasehostingversion"

googlefirebasehostingversion.NewGoogleFirebaseHostingVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseHostingVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



