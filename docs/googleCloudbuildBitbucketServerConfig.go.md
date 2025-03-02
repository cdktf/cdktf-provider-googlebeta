# `googleCloudbuildBitbucketServerConfig` Submodule <a name="`googleCloudbuildBitbucketServerConfig` Submodule" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudbuildBitbucketServerConfig <a name="GoogleCloudbuildBitbucketServerConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config google_cloudbuild_bitbucket_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.NewGoogleCloudbuildBitbucketServerConfig(scope Construct, id *string, config GoogleCloudbuildBitbucketServerConfigConfig) GoogleCloudbuildBitbucketServerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig">GoogleCloudbuildBitbucketServerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig">GoogleCloudbuildBitbucketServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories">PutConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories">ResetConnectedRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork">ResetPeeredNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectedRepositories` <a name="PutConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories"></a>

```go
func PutConnectedRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putConnectedRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets"></a>

```go
func PutSecrets(value GoogleCloudbuildBitbucketServerConfigSecrets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudbuildBitbucketServerConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

---

##### `ResetConnectedRepositories` <a name="ResetConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetConnectedRepositories"></a>

```go
func ResetConnectedRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetPeeredNetwork` <a name="ResetPeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetPeeredNetwork"></a>

```go
func ResetPeeredNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSslCa` <a name="ResetSslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetSslCa"></a>

```go
func ResetSslCa()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudbuildBitbucketServerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudbuildBitbucketServerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudbuildBitbucketServerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudbuildBitbucketServerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey">WebhookKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput">ConnectedRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput">HostUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput">PeeredNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput">SecretsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedRepositories`<sup>Required</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositories"></a>

```go
func ConnectedRepositories() GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList">GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secrets"></a>

```go
func Secrets() GoogleCloudbuildBitbucketServerConfigSecretsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference">GoogleCloudbuildBitbucketServerConfigSecretsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeouts"></a>

```go
func Timeouts() GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference">GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference</a>

---

##### `WebhookKey`<sup>Required</sup> <a name="WebhookKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.webhookKey"></a>

```go
func WebhookKey() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `ConnectedRepositoriesInput`<sup>Optional</sup> <a name="ConnectedRepositoriesInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.connectedRepositoriesInput"></a>

```go
func ConnectedRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `HostUriInput`<sup>Optional</sup> <a name="HostUriInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUriInput"></a>

```go
func HostUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PeeredNetworkInput`<sup>Optional</sup> <a name="PeeredNetworkInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetworkInput"></a>

```go
func PeeredNetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.secretsInput"></a>

```go
func SecretsInput() GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.hostUri"></a>

```go
func HostUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.peeredNetwork"></a>

```go
func PeeredNetwork() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudbuildBitbucketServerConfigConfig <a name="GoogleCloudbuildBitbucketServerConfigConfig" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

&googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiKey: *string,
	ConfigId: *string,
	HostUri: *string,
	Location: *string,
	Secrets: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets,
	Username: *string,
	ConnectedRepositories: interface{},
	Id: *string,
	PeeredNetwork: *string,
	Project: *string,
	SslCa: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId">ConfigId</a></code> | <code>*string</code> | The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri">HostUri</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location">Location</a></code> | <code>*string</code> | The location of this bitbucket server config. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | secrets block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username">Username</a></code> | <code>*string</code> | Username of the account Cloud Build will use on Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories">ConnectedRepositories</a></code> | <code>interface{}</code> | connected_repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork">PeeredNetwork</a></code> | <code>*string</code> | The network to be used when reaching out to the Bitbucket Server instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | SSL certificate to use for requests to Bitbucket Server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Immutable.

API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#api_key GoogleCloudbuildBitbucketServerConfig#api_key}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#config_id GoogleCloudbuildBitbucketServerConfig#config_id}

---

##### `HostUri`<sup>Required</sup> <a name="HostUri" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.hostUri"></a>

```go
HostUri *string
```

- *Type:* *string

Immutable.

The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#host_uri GoogleCloudbuildBitbucketServerConfig#host_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of this bitbucket server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#location GoogleCloudbuildBitbucketServerConfig#location}

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.secrets"></a>

```go
Secrets GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#secrets GoogleCloudbuildBitbucketServerConfig#secrets}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username of the account Cloud Build will use on Bitbucket Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#username GoogleCloudbuildBitbucketServerConfig#username}

---

##### `ConnectedRepositories`<sup>Optional</sup> <a name="ConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.connectedRepositories"></a>

```go
ConnectedRepositories interface{}
```

- *Type:* interface{}

connected_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#connected_repositories GoogleCloudbuildBitbucketServerConfig#connected_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#id GoogleCloudbuildBitbucketServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeeredNetwork`<sup>Optional</sup> <a name="PeeredNetwork" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.peeredNetwork"></a>

```go
PeeredNetwork *string
```

- *Type:* *string

The network to be used when reaching out to the Bitbucket Server instance.

The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#peered_network GoogleCloudbuildBitbucketServerConfig#peered_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#project GoogleCloudbuildBitbucketServerConfig#project}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

SSL certificate to use for requests to Bitbucket Server.

The format should be PEM format but the extension can be one of .pem, .cer, or .crt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#ssl_ca GoogleCloudbuildBitbucketServerConfig#ssl_ca}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudbuildBitbucketServerConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts">GoogleCloudbuildBitbucketServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#timeouts GoogleCloudbuildBitbucketServerConfig#timeouts}

---

### GoogleCloudbuildBitbucketServerConfigConnectedRepositories <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositories" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

&googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories {
	ProjectKey: *string,
	RepoSlug: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Identifier for the project storing the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | Identifier for the repository. |

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Identifier for the project storing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#project_key GoogleCloudbuildBitbucketServerConfig#project_key}

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositories.property.repoSlug"></a>

```go
RepoSlug *string
```

- *Type:* *string

Identifier for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#repo_slug GoogleCloudbuildBitbucketServerConfig#repo_slug}

---

### GoogleCloudbuildBitbucketServerConfigSecrets <a name="GoogleCloudbuildBitbucketServerConfigSecrets" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

&googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfigSecrets {
	AdminAccessTokenVersionName: *string,
	ReadAccessTokenVersionName: *string,
	WebhookSecretVersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>*string</code> | The resource name for the admin access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>*string</code> | The resource name for the read access token's secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>*string</code> | Immutable. |

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.adminAccessTokenVersionName"></a>

```go
AdminAccessTokenVersionName *string
```

- *Type:* *string

The resource name for the admin access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#admin_access_token_version_name GoogleCloudbuildBitbucketServerConfig#admin_access_token_version_name}

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.readAccessTokenVersionName"></a>

```go
ReadAccessTokenVersionName *string
```

- *Type:* *string

The resource name for the read access token's secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#read_access_token_version_name GoogleCloudbuildBitbucketServerConfig#read_access_token_version_name}

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets.property.webhookSecretVersionName"></a>

```go
WebhookSecretVersionName *string
```

- *Type:* *string

Immutable.

The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#webhook_secret_version_name GoogleCloudbuildBitbucketServerConfig#webhook_secret_version_name}

---

### GoogleCloudbuildBitbucketServerConfigTimeouts <a name="GoogleCloudbuildBitbucketServerConfigTimeouts" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

&googlecloudbuildbitbucketserverconfig.GoogleCloudbuildBitbucketServerConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#create GoogleCloudbuildBitbucketServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#delete GoogleCloudbuildBitbucketServerConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloudbuild_bitbucket_server_config#update GoogleCloudbuildBitbucketServerConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.NewGoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get"></a>

```go
func Get(index *f64) GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference <a name="GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.NewGoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput">RepoSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug">RepoSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `RepoSlugInput`<sup>Optional</sup> <a name="RepoSlugInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlugInput"></a>

```go
func RepoSlugInput() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.repoSlug"></a>

```go
func RepoSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigConnectedRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudbuildBitbucketServerConfigSecretsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigSecretsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.NewGoogleCloudbuildBitbucketServerConfigSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildBitbucketServerConfigSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput">AdminAccessTokenVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput">ReadAccessTokenVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput">WebhookSecretVersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName">AdminAccessTokenVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName">ReadAccessTokenVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName">WebhookSecretVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminAccessTokenVersionNameInput`<sup>Optional</sup> <a name="AdminAccessTokenVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionNameInput"></a>

```go
func AdminAccessTokenVersionNameInput() *string
```

- *Type:* *string

---

##### `ReadAccessTokenVersionNameInput`<sup>Optional</sup> <a name="ReadAccessTokenVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionNameInput"></a>

```go
func ReadAccessTokenVersionNameInput() *string
```

- *Type:* *string

---

##### `WebhookSecretVersionNameInput`<sup>Optional</sup> <a name="WebhookSecretVersionNameInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionNameInput"></a>

```go
func WebhookSecretVersionNameInput() *string
```

- *Type:* *string

---

##### `AdminAccessTokenVersionName`<sup>Required</sup> <a name="AdminAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.adminAccessTokenVersionName"></a>

```go
func AdminAccessTokenVersionName() *string
```

- *Type:* *string

---

##### `ReadAccessTokenVersionName`<sup>Required</sup> <a name="ReadAccessTokenVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.readAccessTokenVersionName"></a>

```go
func ReadAccessTokenVersionName() *string
```

- *Type:* *string

---

##### `WebhookSecretVersionName`<sup>Required</sup> <a name="WebhookSecretVersionName" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.webhookSecretVersionName"></a>

```go
func WebhookSecretVersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudbuildBitbucketServerConfigSecrets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigSecrets">GoogleCloudbuildBitbucketServerConfigSecrets</a>

---


### GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference <a name="GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudbuildbitbucketserverconfig"

googlecloudbuildbitbucketserverconfig.NewGoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudbuildBitbucketServerConfig.GoogleCloudbuildBitbucketServerConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



