# `googleContainerAnalysisNote` Submodule <a name="`googleContainerAnalysisNote` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisNote <a name="GoogleContainerAnalysisNote" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNote(scope Construct, id *string, config GoogleContainerAnalysisNoteConfig) GoogleContainerAnalysisNote
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig">GoogleContainerAnalysisNoteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig">GoogleContainerAnalysisNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority">PutAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl">PutRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames">ResetRelatedNoteNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl">ResetRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription">ResetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationAuthority` <a name="PutAttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority"></a>

```go
func PutAttestationAuthority(value GoogleContainerAnalysisNoteAttestationAuthority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---

##### `PutRelatedUrl` <a name="PutRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl"></a>

```go
func PutRelatedUrl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts"></a>

```go
func PutTimeouts(value GoogleContainerAnalysisNoteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

---

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId"></a>

```go
func ResetId()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription"></a>

```go
func ResetLongDescription()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRelatedNoteNames` <a name="ResetRelatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames"></a>

```go
func ResetRelatedNoteNames()
```

##### `ResetRelatedUrl` <a name="ResetRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl"></a>

```go
func ResetRelatedUrl()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription"></a>

```go
func ResetShortDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.GoogleContainerAnalysisNote_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.GoogleContainerAnalysisNote_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.GoogleContainerAnalysisNote_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.GoogleContainerAnalysisNote_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleContainerAnalysisNote to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleContainerAnalysisNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority">AttestationAuthority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl">RelatedUrl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput">AttestationAuthorityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput">RelatedNoteNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput">RelatedUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames">RelatedNoteNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationAuthority`<sup>Required</sup> <a name="AttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority"></a>

```go
func AttestationAuthority() GoogleContainerAnalysisNoteAttestationAuthorityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `RelatedUrl`<sup>Required</sup> <a name="RelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl"></a>

```go
func RelatedUrl() GoogleContainerAnalysisNoteRelatedUrlList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts"></a>

```go
func Timeouts() GoogleContainerAnalysisNoteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AttestationAuthorityInput`<sup>Optional</sup> <a name="AttestationAuthorityInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput"></a>

```go
func AttestationAuthorityInput() GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput"></a>

```go
func LongDescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RelatedNoteNamesInput`<sup>Optional</sup> <a name="RelatedNoteNamesInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```go
func RelatedNoteNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RelatedUrlInput`<sup>Optional</sup> <a name="RelatedUrlInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput"></a>

```go
func RelatedUrlInput() interface{}
```

- *Type:* interface{}

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput"></a>

```go
func ShortDescriptionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RelatedNoteNames`<sup>Required</sup> <a name="RelatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames"></a>

```go
func RelatedNoteNames() *[]*string
```

- *Type:* *[]*string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisNoteAttestationAuthority <a name="GoogleContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

&googlecontaineranalysisnote.GoogleContainerAnalysisNoteAttestationAuthority {
	Hint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint">Hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `Hint`<sup>Required</sup> <a name="Hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```go
Hint GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#hint GoogleContainerAnalysisNote#hint}

---

### GoogleContainerAnalysisNoteAttestationAuthorityHint <a name="GoogleContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

&googlecontaineranalysisnote.GoogleContainerAnalysisNoteAttestationAuthorityHint {
	HumanReadableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">HumanReadableName</a></code> | <code>*string</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `HumanReadableName`<sup>Required</sup> <a name="HumanReadableName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```go
HumanReadableName *string
```

- *Type:* *string

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#human_readable_name GoogleContainerAnalysisNote#human_readable_name}

---

### GoogleContainerAnalysisNoteConfig <a name="GoogleContainerAnalysisNoteConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

&googlecontaineranalysisnote.GoogleContainerAnalysisNoteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttestationAuthority: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority,
	Name: *string,
	ExpirationTime: *string,
	Id: *string,
	LongDescription: *string,
	Project: *string,
	RelatedNoteNames: *[]*string,
	RelatedUrl: interface{},
	ShortDescription: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority">AttestationAuthority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name">Name</a></code> | <code>*string</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription">LongDescription</a></code> | <code>*string</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames">RelatedNoteNames</a></code> | <code>*[]*string</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl">RelatedUrl</a></code> | <code>interface{}</code> | related_url block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationAuthority`<sup>Required</sup> <a name="AttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```go
AttestationAuthority GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#name GoogleContainerAnalysisNote#name}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription"></a>

```go
LongDescription *string
```

- *Type:* *string

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}.

---

##### `RelatedNoteNames`<sup>Optional</sup> <a name="RelatedNoteNames" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```go
RelatedNoteNames *[]*string
```

- *Type:* *[]*string

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}

---

##### `RelatedUrl`<sup>Optional</sup> <a name="RelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl"></a>

```go
RelatedUrl interface{}
```

- *Type:* interface{}

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription"></a>

```go
ShortDescription *string
```

- *Type:* *string

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts"></a>

```go
Timeouts GoogleContainerAnalysisNoteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}

---

### GoogleContainerAnalysisNoteRelatedUrl <a name="GoogleContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

&googlecontaineranalysisnote.GoogleContainerAnalysisNoteRelatedUrl {
	Url: *string,
	Label: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url">Url</a></code> | <code>*string</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label">Label</a></code> | <code>*string</code> | Label to describe usage of the URL. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url"></a>

```go
Url *string
```

- *Type:* *string

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#url GoogleContainerAnalysisNote#url}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label"></a>

```go
Label *string
```

- *Type:* *string

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#label GoogleContainerAnalysisNote#label}

---

### GoogleContainerAnalysisNoteTimeouts <a name="GoogleContainerAnalysisNoteTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

&googlecontaineranalysisnote.GoogleContainerAnalysisNoteTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">HumanReadableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">HumanReadableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HumanReadableNameInput`<sup>Optional</sup> <a name="HumanReadableNameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```go
func HumanReadableNameInput() *string
```

- *Type:* *string

---

##### `HumanReadableName`<sup>Required</sup> <a name="HumanReadableName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```go
func HumanReadableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---


### GoogleContainerAnalysisNoteAttestationAuthorityOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNoteAttestationAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAnalysisNoteAttestationAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">PutHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHint` <a name="PutHint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```go
func PutHint(value GoogleContainerAnalysisNoteAttestationAuthorityHint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">Hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">HintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hint`<sup>Required</sup> <a name="Hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```go
func Hint() GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `HintInput`<sup>Optional</sup> <a name="HintInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```go
func HintInput() GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---


### GoogleContainerAnalysisNoteRelatedUrlList <a name="GoogleContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNoteRelatedUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleContainerAnalysisNoteRelatedUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get"></a>

```go
func Get(index *f64) GoogleContainerAnalysisNoteRelatedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContainerAnalysisNoteRelatedUrlOutputReference <a name="GoogleContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNoteRelatedUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleContainerAnalysisNoteRelatedUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```go
func ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleContainerAnalysisNoteTimeoutsOutputReference <a name="GoogleContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecontaineranalysisnote"

googlecontaineranalysisnote.NewGoogleContainerAnalysisNoteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleContainerAnalysisNoteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



