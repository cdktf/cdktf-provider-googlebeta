# `googleEventarcGoogleApiSource` Submodule <a name="`googleEventarcGoogleApiSource` Submodule" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcGoogleApiSource <a name="GoogleEventarcGoogleApiSource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source google_eventarc_google_api_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.NewGoogleEventarcGoogleApiSource(scope Construct, id *string, config GoogleEventarcGoogleApiSourceConfig) GoogleEventarcGoogleApiSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig">GoogleEventarcGoogleApiSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig">GoogleEventarcGoogleApiSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig"></a>

```go
func PutLoggingConfig(value GoogleEventarcGoogleApiSourceLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts"></a>

```go
func PutTimeouts(value GoogleEventarcGoogleApiSourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetCryptoKeyName"></a>

```go
func ResetCryptoKeyName()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEventarcGoogleApiSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.GoogleEventarcGoogleApiSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.GoogleEventarcGoogleApiSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.GoogleEventarcGoogleApiSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.GoogleEventarcGoogleApiSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleEventarcGoogleApiSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEventarcGoogleApiSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEventarcGoogleApiSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcGoogleApiSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference">GoogleEventarcGoogleApiSourceLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference">GoogleEventarcGoogleApiSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceIdInput">GoogleApiSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceId">GoogleApiSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfig"></a>

```go
func LoggingConfig() GoogleEventarcGoogleApiSourceLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference">GoogleEventarcGoogleApiSourceLoggingConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeouts"></a>

```go
func Timeouts() GoogleEventarcGoogleApiSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference">GoogleEventarcGoogleApiSourceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyNameInput"></a>

```go
func CryptoKeyNameInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GoogleApiSourceIdInput`<sup>Optional</sup> <a name="GoogleApiSourceIdInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceIdInput"></a>

```go
func GoogleApiSourceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() GoogleEventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.cryptoKeyName"></a>

```go
func CryptoKeyName() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GoogleApiSourceId`<sup>Required</sup> <a name="GoogleApiSourceId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.googleApiSourceId"></a>

```go
func GoogleApiSourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcGoogleApiSourceConfig <a name="GoogleEventarcGoogleApiSourceConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

&googleeventarcgoogleapisource.GoogleEventarcGoogleApiSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	GoogleApiSourceId: *string,
	Location: *string,
	Annotations: *map[string]*string,
	CryptoKeyName: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	LoggingConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.destination">Destination</a></code> | <code>*string</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.googleApiSourceId">GoogleApiSourceId</a></code> | <code>*string</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>*string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#id GoogleEventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#project GoogleEventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#destination GoogleEventarcGoogleApiSource#destination}

---

##### `GoogleApiSourceId`<sup>Required</sup> <a name="GoogleApiSourceId" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.googleApiSourceId"></a>

```go
GoogleApiSourceId *string
```

- *Type:* *string

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#google_api_source_id GoogleEventarcGoogleApiSource#google_api_source_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#location GoogleEventarcGoogleApiSource#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#annotations GoogleEventarcGoogleApiSource#annotations}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.cryptoKeyName"></a>

```go
CryptoKeyName *string
```

- *Type:* *string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#crypto_key_name GoogleEventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#display_name GoogleEventarcGoogleApiSource#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#id GoogleEventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#labels GoogleEventarcGoogleApiSource#labels}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.loggingConfig"></a>

```go
LoggingConfig GoogleEventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#logging_config GoogleEventarcGoogleApiSource#logging_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#project GoogleEventarcGoogleApiSource#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceConfig.property.timeouts"></a>

```go
Timeouts GoogleEventarcGoogleApiSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts">GoogleEventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#timeouts GoogleEventarcGoogleApiSource#timeouts}

---

### GoogleEventarcGoogleApiSourceLoggingConfig <a name="GoogleEventarcGoogleApiSourceLoggingConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

&googleeventarcgoogleapisource.GoogleEventarcGoogleApiSourceLoggingConfig {
	LogSeverity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.property.logSeverity">LogSeverity</a></code> | <code>*string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `LogSeverity`<sup>Optional</sup> <a name="LogSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig.property.logSeverity"></a>

```go
LogSeverity *string
```

- *Type:* *string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#log_severity GoogleEventarcGoogleApiSource#log_severity}

---

### GoogleEventarcGoogleApiSourceTimeouts <a name="GoogleEventarcGoogleApiSourceTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

&googleeventarcgoogleapisource.GoogleEventarcGoogleApiSourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#create GoogleEventarcGoogleApiSource#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#delete GoogleEventarcGoogleApiSource#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#update GoogleEventarcGoogleApiSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#create GoogleEventarcGoogleApiSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#delete GoogleEventarcGoogleApiSource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/resources/google_eventarc_google_api_source#update GoogleEventarcGoogleApiSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcGoogleApiSourceLoggingConfigOutputReference <a name="GoogleEventarcGoogleApiSourceLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.NewGoogleEventarcGoogleApiSourceLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcGoogleApiSourceLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity">ResetLogSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogSeverity` <a name="ResetLogSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity"></a>

```go
func ResetLogSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput">LogSeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity">LogSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogSeverityInput`<sup>Optional</sup> <a name="LogSeverityInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput"></a>

```go
func LogSeverityInput() *string
```

- *Type:* *string

---

##### `LogSeverity`<sup>Required</sup> <a name="LogSeverity" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity"></a>

```go
func LogSeverity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcGoogleApiSourceLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceLoggingConfig">GoogleEventarcGoogleApiSourceLoggingConfig</a>

---


### GoogleEventarcGoogleApiSourceTimeoutsOutputReference <a name="GoogleEventarcGoogleApiSourceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleeventarcgoogleapisource"

googleeventarcgoogleapisource.NewGoogleEventarcGoogleApiSourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcGoogleApiSourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEventarcGoogleApiSource.GoogleEventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



