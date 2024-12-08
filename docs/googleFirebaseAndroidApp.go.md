# `googleFirebaseAndroidApp` Submodule <a name="`googleFirebaseAndroidApp` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAndroidApp <a name="GoogleFirebaseAndroidApp" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app google_firebase_android_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.NewGoogleFirebaseAndroidApp(scope Construct, id *string, config GoogleFirebaseAndroidAppConfig) GoogleFirebaseAndroidApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig">GoogleFirebaseAndroidAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig">GoogleFirebaseAndroidAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetApiKeyId">ResetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha1Hashes">ResetSha1Hashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha256Hashes">ResetSha256Hashes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAndroidAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

---

##### `ResetApiKeyId` <a name="ResetApiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetApiKeyId"></a>

```go
func ResetApiKeyId()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSha1Hashes` <a name="ResetSha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha1Hashes"></a>

```go
func ResetSha1Hashes()
```

##### `ResetSha256Hashes` <a name="ResetSha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetSha256Hashes"></a>

```go
func ResetSha256Hashes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.GoogleFirebaseAndroidApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.GoogleFirebaseAndroidApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.GoogleFirebaseAndroidApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.GoogleFirebaseAndroidApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAndroidApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAndroidApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAndroidApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAndroidApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference">GoogleFirebaseAndroidAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyIdInput">ApiKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageNameInput">PackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1HashesInput">Sha1HashesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256HashesInput">Sha256HashesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1Hashes">Sha1Hashes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256Hashes">Sha256Hashes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAndroidAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference">GoogleFirebaseAndroidAppTimeoutsOutputReference</a>

---

##### `ApiKeyIdInput`<sup>Optional</sup> <a name="ApiKeyIdInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyIdInput"></a>

```go
func ApiKeyIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageNameInput"></a>

```go
func PackageNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Sha1HashesInput`<sup>Optional</sup> <a name="Sha1HashesInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1HashesInput"></a>

```go
func Sha1HashesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Sha256HashesInput`<sup>Optional</sup> <a name="Sha256HashesInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256HashesInput"></a>

```go
func Sha256HashesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Sha1Hashes`<sup>Required</sup> <a name="Sha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha1Hashes"></a>

```go
func Sha1Hashes() *[]*string
```

- *Type:* *[]*string

---

##### `Sha256Hashes`<sup>Required</sup> <a name="Sha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.sha256Hashes"></a>

```go
func Sha256Hashes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAndroidAppConfig <a name="GoogleFirebaseAndroidAppConfig" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

&googlefirebaseandroidapp.GoogleFirebaseAndroidAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	PackageName: *string,
	ApiKeyId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Sha1Hashes: *[]*string,
	Sha256Hashes: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-assigned display name of the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.packageName">PackageName</a></code> | <code>*string</code> | The canonical package name of the Android app as would appear in the Google Play Developer Console. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | (Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon 'terraform destroy'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#id GoogleFirebaseAndroidApp#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#project GoogleFirebaseAndroidApp#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha1Hashes">Sha1Hashes</a></code> | <code>*[]*string</code> | The SHA1 certificate hashes for the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha256Hashes">Sha256Hashes</a></code> | <code>*[]*string</code> | The SHA256 certificate hashes for the AndroidApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-assigned display name of the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#display_name GoogleFirebaseAndroidApp#display_name}

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.packageName"></a>

```go
PackageName *string
```

- *Type:* *string

The canonical package name of the Android app as would appear in the Google Play Developer Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#package_name GoogleFirebaseAndroidApp#package_name}

---

##### `ApiKeyId`<sup>Optional</sup> <a name="ApiKeyId" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.apiKeyId"></a>

```go
ApiKeyId *string
```

- *Type:* *string

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#api_key_id GoogleFirebaseAndroidApp#api_key_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.

This is useful because the AndroidApp may be
serving traffic. Set to 'DELETE' to delete the AndroidApp. Defaults to 'DELETE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#deletion_policy GoogleFirebaseAndroidApp#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#id GoogleFirebaseAndroidApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#project GoogleFirebaseAndroidApp#project}.

---

##### `Sha1Hashes`<sup>Optional</sup> <a name="Sha1Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha1Hashes"></a>

```go
Sha1Hashes *[]*string
```

- *Type:* *[]*string

The SHA1 certificate hashes for the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#sha1_hashes GoogleFirebaseAndroidApp#sha1_hashes}

---

##### `Sha256Hashes`<sup>Optional</sup> <a name="Sha256Hashes" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.sha256Hashes"></a>

```go
Sha256Hashes *[]*string
```

- *Type:* *[]*string

The SHA256 certificate hashes for the AndroidApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#sha256_hashes GoogleFirebaseAndroidApp#sha256_hashes}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAndroidAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts">GoogleFirebaseAndroidAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#timeouts GoogleFirebaseAndroidApp#timeouts}

---

### GoogleFirebaseAndroidAppTimeouts <a name="GoogleFirebaseAndroidAppTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

&googlefirebaseandroidapp.GoogleFirebaseAndroidAppTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#create GoogleFirebaseAndroidApp#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#delete GoogleFirebaseAndroidApp#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#update GoogleFirebaseAndroidApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#create GoogleFirebaseAndroidApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#delete GoogleFirebaseAndroidApp#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_firebase_android_app#update GoogleFirebaseAndroidApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAndroidAppTimeoutsOutputReference <a name="GoogleFirebaseAndroidAppTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlefirebaseandroidapp"

googlefirebaseandroidapp.NewGoogleFirebaseAndroidAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAndroidAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAndroidApp.GoogleFirebaseAndroidAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



