# `googleAppEngineFlexibleAppVersion` Submodule <a name="`googleAppEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineFlexibleAppVersion <a name="GoogleAppEngineFlexibleAppVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersion(scope Construct, id *string, config GoogleAppEngineFlexibleAppVersionConfig) GoogleAppEngineFlexibleAppVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig">PutApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService">PutEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings">PutFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck">PutLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck">PutReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig">ResetApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings">ResetBetaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration">ResetDefaultExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService">ResetEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings">ResetFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex">ResetNobuildFilesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel">ResetRuntimeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">ResetRuntimeMainExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus">ResetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiConfig` <a name="PutApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig"></a>

```go
func PutApiConfig(value GoogleAppEngineFlexibleAppVersionApiConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```go
func PutAutomaticScaling(value GoogleAppEngineFlexibleAppVersionAutomaticScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment"></a>

```go
func PutDeployment(value GoogleAppEngineFlexibleAppVersionDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `PutEndpointsApiService` <a name="PutEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```go
func PutEndpointsApiService(value GoogleAppEngineFlexibleAppVersionEndpointsApiService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint"></a>

```go
func PutEntrypoint(value GoogleAppEngineFlexibleAppVersionEntrypoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `PutFlexibleRuntimeSettings` <a name="PutFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings"></a>

```go
func PutFlexibleRuntimeSettings(value GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers"></a>

```go
func PutHandlers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessCheck` <a name="PutLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck"></a>

```go
func PutLivenessCheck(value GoogleAppEngineFlexibleAppVersionLivenessCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling"></a>

```go
func PutManualScaling(value GoogleAppEngineFlexibleAppVersionManualScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork"></a>

```go
func PutNetwork(value GoogleAppEngineFlexibleAppVersionNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `PutReadinessCheck` <a name="PutReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck"></a>

```go
func PutReadinessCheck(value GoogleAppEngineFlexibleAppVersionReadinessCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources"></a>

```go
func PutResources(value GoogleAppEngineFlexibleAppVersionResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAppEngineFlexibleAppVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```go
func PutVpcAccessConnector(value GoogleAppEngineFlexibleAppVersionVpcAccessConnector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `ResetApiConfig` <a name="ResetApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig"></a>

```go
func ResetApiConfig()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```go
func ResetAutomaticScaling()
```

##### `ResetBetaSettings` <a name="ResetBetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings"></a>

```go
func ResetBetaSettings()
```

##### `ResetDefaultExpiration` <a name="ResetDefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```go
func ResetDefaultExpiration()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```go
func ResetDeleteServiceOnDestroy()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetEndpointsApiService` <a name="ResetEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```go
func ResetEndpointsApiService()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables"></a>

```go
func ResetEnvVariables()
```

##### `ResetFlexibleRuntimeSettings` <a name="ResetFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings"></a>

```go
func ResetFlexibleRuntimeSettings()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers"></a>

```go
func ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices"></a>

```go
func ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass"></a>

```go
func ResetInstanceClass()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling"></a>

```go
func ResetManualScaling()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNobuildFilesRegex` <a name="ResetNobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```go
func ResetNobuildFilesRegex()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```go
func ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources"></a>

```go
func ResetResources()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```go
func ResetRuntimeApiVersion()
```

##### `ResetRuntimeChannel` <a name="ResetRuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```go
func ResetRuntimeChannel()
```

##### `ResetRuntimeMainExecutablePath` <a name="ResetRuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```go
func ResetRuntimeMainExecutablePath()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetServingStatus` <a name="ResetServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus"></a>

```go
func ResetServingStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId"></a>

```go
func ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```go
func ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAppEngineFlexibleAppVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAppEngineFlexibleAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineFlexibleAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings">FlexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput">ApiConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput">BetaSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput">DefaultExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput">EndpointsApiServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput">FlexibleRuntimeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput">HandlersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput">LivenessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">NobuildFilesRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput">ReadinessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput">RuntimeChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">RuntimeMainExecutablePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput">ServingStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings">BetaSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration">DefaultExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel">RuntimeChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig"></a>

```go
func ApiConfig() GoogleAppEngineFlexibleAppVersionApiConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling"></a>

```go
func AutomaticScaling() GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment"></a>

```go
func Deployment() GoogleAppEngineFlexibleAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `EndpointsApiService`<sup>Required</sup> <a name="EndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```go
func EndpointsApiService() GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint"></a>

```go
func Entrypoint() GoogleAppEngineFlexibleAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `FlexibleRuntimeSettings`<sup>Required</sup> <a name="FlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings"></a>

```go
func FlexibleRuntimeSettings() GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers"></a>

```go
func Handlers() GoogleAppEngineFlexibleAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a>

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck"></a>

```go
func LivenessCheck() GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling"></a>

```go
func ManualScaling() GoogleAppEngineFlexibleAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network"></a>

```go
func Network() GoogleAppEngineFlexibleAppVersionNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck"></a>

```go
func ReadinessCheck() GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources"></a>

```go
func Resources() GoogleAppEngineFlexibleAppVersionResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts"></a>

```go
func Timeouts() GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```go
func VpcAccessConnector() GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `ApiConfigInput`<sup>Optional</sup> <a name="ApiConfigInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```go
func ApiConfigInput() GoogleAppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```go
func AutomaticScalingInput() GoogleAppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `BetaSettingsInput`<sup>Optional</sup> <a name="BetaSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```go
func BetaSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExpirationInput`<sup>Optional</sup> <a name="DefaultExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```go
func DefaultExpirationInput() *string
```

- *Type:* *string

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```go
func DeleteServiceOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput"></a>

```go
func DeploymentInput() GoogleAppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `EndpointsApiServiceInput`<sup>Optional</sup> <a name="EndpointsApiServiceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```go
func EndpointsApiServiceInput() GoogleAppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput"></a>

```go
func EntrypointInput() GoogleAppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```go
func EnvVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FlexibleRuntimeSettingsInput`<sup>Optional</sup> <a name="FlexibleRuntimeSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput"></a>

```go
func FlexibleRuntimeSettingsInput() GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput"></a>

```go
func HandlersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```go
func InboundServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```go
func InstanceClassInput() *string
```

- *Type:* *string

---

##### `LivenessCheckInput`<sup>Optional</sup> <a name="LivenessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```go
func LivenessCheckInput() GoogleAppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```go
func ManualScalingInput() GoogleAppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput"></a>

```go
func NetworkInput() GoogleAppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `NobuildFilesRegexInput`<sup>Optional</sup> <a name="NobuildFilesRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```go
func NobuildFilesRegexInput() *string
```

- *Type:* *string

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```go
func NoopOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReadinessCheckInput`<sup>Optional</sup> <a name="ReadinessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```go
func ReadinessCheckInput() GoogleAppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput"></a>

```go
func ResourcesInput() GoogleAppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```go
func RuntimeApiVersionInput() *string
```

- *Type:* *string

---

##### `RuntimeChannelInput`<sup>Optional</sup> <a name="RuntimeChannelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```go
func RuntimeChannelInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `RuntimeMainExecutablePathInput`<sup>Optional</sup> <a name="RuntimeMainExecutablePathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```go
func RuntimeMainExecutablePathInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServingStatusInput`<sup>Optional</sup> <a name="ServingStatusInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```go
func ServingStatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```go
func VpcAccessConnectorInput() GoogleAppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `BetaSettings`<sup>Required</sup> <a name="BetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings"></a>

```go
func BetaSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExpiration`<sup>Required</sup> <a name="DefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```go
func DefaultExpiration() *string
```

- *Type:* *string

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```go
func DeleteServiceOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables"></a>

```go
func EnvVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices"></a>

```go
func InboundServices() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass"></a>

```go
func InstanceClass() *string
```

- *Type:* *string

---

##### `NobuildFilesRegex`<sup>Required</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```go
func NobuildFilesRegex() *string
```

- *Type:* *string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```go
func NoopOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```go
func RuntimeApiVersion() *string
```

- *Type:* *string

---

##### `RuntimeChannel`<sup>Required</sup> <a name="RuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```go
func RuntimeChannel() *string
```

- *Type:* *string

---

##### `RuntimeMainExecutablePath`<sup>Required</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```go
func RuntimeMainExecutablePath() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServingStatus`<sup>Required</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus"></a>

```go
func ServingStatus() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineFlexibleAppVersionApiConfig <a name="GoogleAppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionApiConfig {
	Script: *string,
	AuthFailAction: *string,
	Login: *string,
	SecurityLevel: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script">Script</a></code> | <code>*string</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login">Login</a></code> | <code>*string</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url">Url</a></code> | <code>*string</code> | URL to serve the endpoint at. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script"></a>

```go
Script *string
```

- *Type:* *string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```go
AuthFailAction *string
```

- *Type:* *string

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#url GoogleAppEngineFlexibleAppVersion#url}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScaling <a name="GoogleAppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionAutomaticScaling {
	CpuUtilization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization,
	CoolDownPeriod: *string,
	DiskUtilization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization,
	MaxConcurrentRequests: *f64,
	MaxIdleInstances: *f64,
	MaxPendingLatency: *string,
	MaxTotalInstances: *f64,
	MinIdleInstances: *f64,
	MinPendingLatency: *string,
	MinTotalInstances: *f64,
	NetworkUtilization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization,
	RequestUtilization: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>*string</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>*f64</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">MinTotalInstances</a></code> | <code>*f64</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```go
CpuUtilization GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#cpu_utilization GoogleAppEngineFlexibleAppVersion#cpu_utilization}

---

##### `CoolDownPeriod`<sup>Optional</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```go
CoolDownPeriod *string
```

- *Type:* *string

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#cool_down_period GoogleAppEngineFlexibleAppVersion#cool_down_period}

---

##### `DiskUtilization`<sup>Optional</sup> <a name="DiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```go
DiskUtilization GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#disk_utilization GoogleAppEngineFlexibleAppVersion#disk_utilization}

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```go
MaxConcurrentRequests *f64
```

- *Type:* *f64

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#max_concurrent_requests GoogleAppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```go
MaxIdleInstances *f64
```

- *Type:* *f64

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#max_idle_instances GoogleAppEngineFlexibleAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```go
MaxPendingLatency *string
```

- *Type:* *string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#max_pending_latency GoogleAppEngineFlexibleAppVersion#max_pending_latency}

---

##### `MaxTotalInstances`<sup>Optional</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```go
MaxTotalInstances *f64
```

- *Type:* *f64

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#max_total_instances GoogleAppEngineFlexibleAppVersion#max_total_instances}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```go
MinIdleInstances *f64
```

- *Type:* *f64

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#min_idle_instances GoogleAppEngineFlexibleAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```go
MinPendingLatency *string
```

- *Type:* *string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#min_pending_latency GoogleAppEngineFlexibleAppVersion#min_pending_latency}

---

##### `MinTotalInstances`<sup>Optional</sup> <a name="MinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```go
MinTotalInstances *f64
```

- *Type:* *f64

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#min_total_instances GoogleAppEngineFlexibleAppVersion#min_total_instances}

---

##### `NetworkUtilization`<sup>Optional</sup> <a name="NetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```go
NetworkUtilization GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#network_utilization GoogleAppEngineFlexibleAppVersion#network_utilization}

---

##### `RequestUtilization`<sup>Optional</sup> <a name="RequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```go
RequestUtilization GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#request_utilization GoogleAppEngineFlexibleAppVersion#request_utilization}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
	TargetUtilization: *f64,
	AggregationWindowLength: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">TargetUtilization</a></code> | <code>*f64</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>*string</code> | Period of time over which CPU utilization is calculated. |

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```go
TargetUtilization *f64
```

- *Type:* *f64

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_utilization GoogleAppEngineFlexibleAppVersion#target_utilization}

---

##### `AggregationWindowLength`<sup>Optional</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```go
AggregationWindowLength *string
```

- *Type:* *string

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#aggregation_window_length GoogleAppEngineFlexibleAppVersion#aggregation_window_length}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
	TargetReadBytesPerSecond: *f64,
	TargetReadOpsPerSecond: *f64,
	TargetWriteBytesPerSecond: *f64,
	TargetWriteOpsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>*f64</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>*f64</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>*f64</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>*f64</code> | Target ops written per second. |

---

##### `TargetReadBytesPerSecond`<sup>Optional</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```go
TargetReadBytesPerSecond *f64
```

- *Type:* *f64

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_read_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `TargetReadOpsPerSecond`<sup>Optional</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```go
TargetReadOpsPerSecond *f64
```

- *Type:* *f64

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_read_ops_per_second GoogleAppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `TargetWriteBytesPerSecond`<sup>Optional</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```go
TargetWriteBytesPerSecond *f64
```

- *Type:* *f64

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_write_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `TargetWriteOpsPerSecond`<sup>Optional</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```go
TargetWriteOpsPerSecond *f64
```

- *Type:* *f64

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_write_ops_per_second GoogleAppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
	TargetReceivedBytesPerSecond: *f64,
	TargetReceivedPacketsPerSecond: *f64,
	TargetSentBytesPerSecond: *f64,
	TargetSentPacketsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>*f64</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>*f64</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>*f64</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>*f64</code> | Target packets sent per second. |

---

##### `TargetReceivedBytesPerSecond`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```go
TargetReceivedBytesPerSecond *f64
```

- *Type:* *f64

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_received_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `TargetReceivedPacketsPerSecond`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```go
TargetReceivedPacketsPerSecond *f64
```

- *Type:* *f64

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_received_packets_per_second GoogleAppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `TargetSentBytesPerSecond`<sup>Optional</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```go
TargetSentBytesPerSecond *f64
```

- *Type:* *f64

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_sent_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `TargetSentPacketsPerSecond`<sup>Optional</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```go
TargetSentPacketsPerSecond *f64
```

- *Type:* *f64

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_sent_packets_per_second GoogleAppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
	TargetConcurrentRequests: *f64,
	TargetRequestCountPerSecond: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>*f64</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>*string</code> | Target requests per second. |

---

##### `TargetConcurrentRequests`<sup>Optional</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```go
TargetConcurrentRequests *f64
```

- *Type:* *f64

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_concurrent_requests GoogleAppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `TargetRequestCountPerSecond`<sup>Optional</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```go
TargetRequestCountPerSecond *string
```

- *Type:* *string

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#target_request_count_per_second GoogleAppEngineFlexibleAppVersion#target_request_count_per_second}

---

### GoogleAppEngineFlexibleAppVersionConfig <a name="GoogleAppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LivenessCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck,
	ReadinessCheck: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck,
	Runtime: *string,
	Service: *string,
	ApiConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig,
	AutomaticScaling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling,
	BetaSettings: *map[string]*string,
	DefaultExpiration: *string,
	DeleteServiceOnDestroy: interface{},
	Deployment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment,
	EndpointsApiService: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService,
	Entrypoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint,
	EnvVariables: *map[string]*string,
	FlexibleRuntimeSettings: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings,
	Handlers: interface{},
	Id: *string,
	InboundServices: *[]*string,
	InstanceClass: *string,
	ManualScaling: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling,
	Network: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork,
	NobuildFilesRegex: *string,
	NoopOnDestroy: interface{},
	Project: *string,
	Resources: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources,
	RuntimeApiVersion: *string,
	RuntimeChannel: *string,
	RuntimeMainExecutablePath: *string,
	ServiceAccount: *string,
	ServingStatus: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts,
	VersionId: *string,
	VpcAccessConnector: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service">Service</a></code> | <code>*string</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings">BetaSettings</a></code> | <code>*map[string]*string</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration">DefaultExpiration</a></code> | <code>*string</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings">FlexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | flexible_runtime_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers">Handlers</a></code> | <code>interface{}</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>*string</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel">RuntimeChannel</a></code> | <code>*string</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>*string</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```go
LivenessCheck GoogleAppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#liveness_check GoogleAppEngineFlexibleAppVersion#liveness_check}

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```go
ReadinessCheck GoogleAppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#readiness_check GoogleAppEngineFlexibleAppVersion#readiness_check}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#runtime GoogleAppEngineFlexibleAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#service GoogleAppEngineFlexibleAppVersion#service}

---

##### `ApiConfig`<sup>Optional</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```go
ApiConfig GoogleAppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#api_config GoogleAppEngineFlexibleAppVersion#api_config}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```go
AutomaticScaling GoogleAppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#automatic_scaling GoogleAppEngineFlexibleAppVersion#automatic_scaling}

---

##### `BetaSettings`<sup>Optional</sup> <a name="BetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```go
BetaSettings *map[string]*string
```

- *Type:* *map[string]*string

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#beta_settings GoogleAppEngineFlexibleAppVersion#beta_settings}

---

##### `DefaultExpiration`<sup>Optional</sup> <a name="DefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```go
DefaultExpiration *string
```

- *Type:* *string

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#default_expiration GoogleAppEngineFlexibleAppVersion#default_expiration}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```go
DeleteServiceOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#delete_service_on_destroy GoogleAppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment"></a>

```go
Deployment GoogleAppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#deployment GoogleAppEngineFlexibleAppVersion#deployment}

---

##### `EndpointsApiService`<sup>Optional</sup> <a name="EndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```go
EndpointsApiService GoogleAppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#endpoints_api_service GoogleAppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```go
Entrypoint GoogleAppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#entrypoint GoogleAppEngineFlexibleAppVersion#entrypoint}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```go
EnvVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#env_variables GoogleAppEngineFlexibleAppVersion#env_variables}

---

##### `FlexibleRuntimeSettings`<sup>Optional</sup> <a name="FlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings"></a>

```go
FlexibleRuntimeSettings GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

flexible_runtime_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#flexible_runtime_settings GoogleAppEngineFlexibleAppVersion#flexible_runtime_settings}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers"></a>

```go
Handlers interface{}
```

- *Type:* interface{}

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#handlers GoogleAppEngineFlexibleAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```go
InboundServices *[]*string
```

- *Type:* *[]*string

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#inbound_services GoogleAppEngineFlexibleAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```go
InstanceClass *string
```

- *Type:* *string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#instance_class GoogleAppEngineFlexibleAppVersion#instance_class}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```go
ManualScaling GoogleAppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#manual_scaling GoogleAppEngineFlexibleAppVersion#manual_scaling}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network"></a>

```go
Network GoogleAppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#network GoogleAppEngineFlexibleAppVersion#network}

---

##### `NobuildFilesRegex`<sup>Optional</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```go
NobuildFilesRegex *string
```

- *Type:* *string

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#nobuild_files_regex GoogleAppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```go
NoopOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#noop_on_destroy GoogleAppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources"></a>

```go
Resources GoogleAppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#resources GoogleAppEngineFlexibleAppVersion#resources}

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```go
RuntimeApiVersion *string
```

- *Type:* *string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#runtime_api_version GoogleAppEngineFlexibleAppVersion#runtime_api_version}

---

##### `RuntimeChannel`<sup>Optional</sup> <a name="RuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```go
RuntimeChannel *string
```

- *Type:* *string

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#runtime_channel GoogleAppEngineFlexibleAppVersion#runtime_channel}

---

##### `RuntimeMainExecutablePath`<sup>Optional</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```go
RuntimeMainExecutablePath *string
```

- *Type:* *string

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#runtime_main_executable_path GoogleAppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#service_account GoogleAppEngineFlexibleAppVersion#service_account}

---

##### `ServingStatus`<sup>Optional</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```go
ServingStatus *string
```

- *Type:* *string

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#serving_status GoogleAppEngineFlexibleAppVersion#serving_status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```go
Timeouts GoogleAppEngineFlexibleAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#timeouts GoogleAppEngineFlexibleAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#version_id GoogleAppEngineFlexibleAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```go
VpcAccessConnector GoogleAppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#vpc_access_connector GoogleAppEngineFlexibleAppVersion#vpc_access_connector}

---

### GoogleAppEngineFlexibleAppVersionDeployment <a name="GoogleAppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionDeployment {
	CloudBuildOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions,
	Container: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer,
	Files: interface{},
	Zip: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files">Files</a></code> | <code>interface{}</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `CloudBuildOptions`<sup>Optional</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```go
CloudBuildOptions GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_options GoogleAppEngineFlexibleAppVersion#cloud_build_options}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container"></a>

```go
Container GoogleAppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#container GoogleAppEngineFlexibleAppVersion#container}

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files"></a>

```go
Files interface{}
```

- *Type:* interface{}

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#files GoogleAppEngineFlexibleAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip"></a>

```go
Zip GoogleAppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#zip GoogleAppEngineFlexibleAppVersion#zip}

---

### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
	AppYamlPath: *string,
	CloudBuildTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">AppYamlPath</a></code> | <code>*string</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>*string</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```go
AppYamlPath *string
```

- *Type:* *string

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#app_yaml_path GoogleAppEngineFlexibleAppVersion#app_yaml_path}

---

##### `CloudBuildTimeout`<sup>Optional</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```go
CloudBuildTimeout *string
```

- *Type:* *string

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_timeout GoogleAppEngineFlexibleAppVersion#cloud_build_timeout}

---

### GoogleAppEngineFlexibleAppVersionDeploymentContainer <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionDeploymentContainer {
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image">Image</a></code> | <code>*string</code> | URI to the hosted container image in Google Container Registry. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#image GoogleAppEngineFlexibleAppVersion#image}

---

### GoogleAppEngineFlexibleAppVersionDeploymentFiles <a name="GoogleAppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionDeploymentFiles {
	Name: *string,
	SourceUrl: *string,
	Sha1Sum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```go
Sha1Sum *string
```

- *Type:* *string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#sha1_sum GoogleAppEngineFlexibleAppVersion#sha1_sum}

---

### GoogleAppEngineFlexibleAppVersionDeploymentZip <a name="GoogleAppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionDeploymentZip {
	SourceUrl: *string,
	FilesCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>*f64</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```go
FilesCount *f64
```

- *Type:* *f64

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#files_count GoogleAppEngineFlexibleAppVersion#files_count}

---

### GoogleAppEngineFlexibleAppVersionEndpointsApiService <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionEndpointsApiService {
	Name: *string,
	ConfigId: *string,
	DisableTraceSampling: interface{},
	RolloutStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name">Name</a></code> | <code>*string</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId">ConfigId</a></code> | <code>*string</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>interface{}</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">RolloutStrategy</a></code> | <code>*string</code> | Endpoints rollout strategy. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#config_id GoogleAppEngineFlexibleAppVersion#config_id}

---

##### `DisableTraceSampling`<sup>Optional</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```go
DisableTraceSampling interface{}
```

- *Type:* interface{}

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#disable_trace_sampling GoogleAppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `RolloutStrategy`<sup>Optional</sup> <a name="RolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```go
RolloutStrategy *string
```

- *Type:* *string

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#rollout_strategy GoogleAppEngineFlexibleAppVersion#rollout_strategy}

---

### GoogleAppEngineFlexibleAppVersionEntrypoint <a name="GoogleAppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionEntrypoint {
	Shell: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell">Shell</a></code> | <code>*string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```go
Shell *string
```

- *Type:* *string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#shell GoogleAppEngineFlexibleAppVersion#shell}

---

### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings {
	OperatingSystem: *string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Operating System of the application runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | The runtime version of an App Engine flexible application. |

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Operating System of the application runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#operating_system GoogleAppEngineFlexibleAppVersion#operating_system}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

The runtime version of an App Engine flexible application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#runtime_version GoogleAppEngineFlexibleAppVersion#runtime_version}

---

### GoogleAppEngineFlexibleAppVersionHandlers <a name="GoogleAppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionHandlers {
	AuthFailAction: *string,
	Login: *string,
	RedirectHttpResponseCode: *string,
	Script: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript,
	SecurityLevel: *string,
	StaticFiles: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles,
	UrlRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login">Login</a></code> | <code>*string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```go
AuthFailAction *string
```

- *Type:* *string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login"></a>

```go
Login *string
```

- *Type:* *string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```go
RedirectHttpResponseCode *string
```

- *Type:* *string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#redirect_http_response_code GoogleAppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script"></a>

```go
Script GoogleAppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```go
StaticFiles GoogleAppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#static_files GoogleAppEngineFlexibleAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```go
UrlRegex *string
```

- *Type:* *string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#url_regex GoogleAppEngineFlexibleAppVersion#url_regex}

---

### GoogleAppEngineFlexibleAppVersionHandlersScript <a name="GoogleAppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionHandlersScript {
	ScriptPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```go
ScriptPath *string
```

- *Type:* *string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#script_path GoogleAppEngineFlexibleAppVersion#script_path}

---

### GoogleAppEngineFlexibleAppVersionHandlersStaticFiles <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles {
	ApplicationReadable: interface{},
	Expiration: *string,
	HttpHeaders: *map[string]*string,
	MimeType: *string,
	Path: *string,
	RequireMatchingFile: interface{},
	UploadPathRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>*string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>*string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>*string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```go
ApplicationReadable interface{}
```

- *Type:* interface{}

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#application_readable GoogleAppEngineFlexibleAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#expiration GoogleAppEngineFlexibleAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```go
HttpHeaders *map[string]*string
```

- *Type:* *map[string]*string

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#http_headers GoogleAppEngineFlexibleAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#mime_type GoogleAppEngineFlexibleAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```go
RequireMatchingFile interface{}
```

- *Type:* interface{}

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#require_matching_file GoogleAppEngineFlexibleAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```go
UploadPathRegex *string
```

- *Type:* *string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#upload_path_regex GoogleAppEngineFlexibleAppVersion#upload_path_regex}

---

### GoogleAppEngineFlexibleAppVersionLivenessCheck <a name="GoogleAppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionLivenessCheck {
	Path: *string,
	CheckInterval: *string,
	FailureThreshold: *f64,
	Host: *string,
	InitialDelay: *string,
	SuccessThreshold: *f64,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path">Path</a></code> | <code>*string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host">Host</a></code> | <code>*string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout">Timeout</a></code> | <code>*string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```go
CheckInterval *string
```

- *Type:* *string

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```go
InitialDelay *string
```

- *Type:* *string

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#initial_delay GoogleAppEngineFlexibleAppVersion#initial_delay}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionManualScaling <a name="GoogleAppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionManualScaling {
	Instances: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances">Instances</a></code> | <code>*f64</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#instances GoogleAppEngineFlexibleAppVersion#instances}

---

### GoogleAppEngineFlexibleAppVersionNetwork <a name="GoogleAppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionNetwork {
	Name: *string,
	ForwardedPorts: *[]*string,
	InstanceIpMode: *string,
	InstanceTag: *string,
	SessionAffinity: interface{},
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name">Name</a></code> | <code>*string</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts">ForwardedPorts</a></code> | <code>*[]*string</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode">InstanceIpMode</a></code> | <code>*string</code> | Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag">InstanceTag</a></code> | <code>*string</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity">SessionAffinity</a></code> | <code>interface{}</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `ForwardedPorts`<sup>Optional</sup> <a name="ForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```go
ForwardedPorts *[]*string
```

- *Type:* *[]*string

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#forwarded_ports GoogleAppEngineFlexibleAppVersion#forwarded_ports}

---

##### `InstanceIpMode`<sup>Optional</sup> <a name="InstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode"></a>

```go
InstanceIpMode *string
```

- *Type:* *string

Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#instance_ip_mode GoogleAppEngineFlexibleAppVersion#instance_ip_mode}

---

##### `InstanceTag`<sup>Optional</sup> <a name="InstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```go
InstanceTag *string
```

- *Type:* *string

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#instance_tag GoogleAppEngineFlexibleAppVersion#instance_tag}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```go
SessionAffinity interface{}
```

- *Type:* interface{}

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#session_affinity GoogleAppEngineFlexibleAppVersion#session_affinity}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#subnetwork GoogleAppEngineFlexibleAppVersion#subnetwork}

---

### GoogleAppEngineFlexibleAppVersionReadinessCheck <a name="GoogleAppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionReadinessCheck {
	Path: *string,
	AppStartTimeout: *string,
	CheckInterval: *string,
	FailureThreshold: *f64,
	Host: *string,
	SuccessThreshold: *f64,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path">Path</a></code> | <code>*string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">AppStartTimeout</a></code> | <code>*string</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host">Host</a></code> | <code>*string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout">Timeout</a></code> | <code>*string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `AppStartTimeout`<sup>Optional</sup> <a name="AppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```go
AppStartTimeout *string
```

- *Type:* *string

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#app_start_timeout GoogleAppEngineFlexibleAppVersion#app_start_timeout}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```go
CheckInterval *string
```

- *Type:* *string

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionResources <a name="GoogleAppEngineFlexibleAppVersionResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionResources {
	Cpu: *f64,
	DiskGb: *f64,
	MemoryGb: *f64,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu">Cpu</a></code> | <code>*f64</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb">DiskGb</a></code> | <code>*f64</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#cpu GoogleAppEngineFlexibleAppVersion#cpu}

---

##### `DiskGb`<sup>Optional</sup> <a name="DiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb"></a>

```go
DiskGb *f64
```

- *Type:* *f64

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#disk_gb GoogleAppEngineFlexibleAppVersion#disk_gb}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#memory_gb GoogleAppEngineFlexibleAppVersion#memory_gb}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#volumes GoogleAppEngineFlexibleAppVersion#volumes}

---

### GoogleAppEngineFlexibleAppVersionResourcesVolumes <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionResourcesVolumes {
	Name: *string,
	SizeGb: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name">Name</a></code> | <code>*string</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">VolumeType</a></code> | <code>*string</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#size_gb GoogleAppEngineFlexibleAppVersion#size_gb}

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#volume_type GoogleAppEngineFlexibleAppVersion#volume_type}

---

### GoogleAppEngineFlexibleAppVersionTimeouts <a name="GoogleAppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}.

---

### GoogleAppEngineFlexibleAppVersionVpcAccessConnector <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

&googleappengineflexibleappversion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>*string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```go
Name *string
```

- *Type:* *string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineFlexibleAppVersionApiConfigOutputReference <a name="GoogleAppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionApiConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionApiConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```go
func ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```go
func AuthFailActionInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```go
func AuthFailAction() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">ResetAggregationWindowLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationWindowLength` <a name="ResetAggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```go
func ResetAggregationWindowLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">AggregationWindowLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">TargetUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">TargetUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationWindowLengthInput`<sup>Optional</sup> <a name="AggregationWindowLengthInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```go
func AggregationWindowLengthInput() *string
```

- *Type:* *string

---

##### `TargetUtilizationInput`<sup>Optional</sup> <a name="TargetUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```go
func TargetUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AggregationWindowLength`<sup>Required</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```go
func AggregationWindowLength() *string
```

- *Type:* *string

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```go
func TargetUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">ResetTargetReadBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">ResetTargetReadOpsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">ResetTargetWriteBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">ResetTargetWriteOpsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReadBytesPerSecond` <a name="ResetTargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```go
func ResetTargetReadBytesPerSecond()
```

##### `ResetTargetReadOpsPerSecond` <a name="ResetTargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```go
func ResetTargetReadOpsPerSecond()
```

##### `ResetTargetWriteBytesPerSecond` <a name="ResetTargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```go
func ResetTargetWriteBytesPerSecond()
```

##### `ResetTargetWriteOpsPerSecond` <a name="ResetTargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```go
func ResetTargetWriteOpsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">TargetReadBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">TargetReadOpsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">TargetWriteBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">TargetWriteOpsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetReadBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReadBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```go
func TargetReadBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReadOpsPerSecondInput`<sup>Optional</sup> <a name="TargetReadOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```go
func TargetReadOpsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetWriteBytesPerSecondInput`<sup>Optional</sup> <a name="TargetWriteBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```go
func TargetWriteBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetWriteOpsPerSecondInput`<sup>Optional</sup> <a name="TargetWriteOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```go
func TargetWriteOpsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReadBytesPerSecond`<sup>Required</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```go
func TargetReadBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetReadOpsPerSecond`<sup>Required</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```go
func TargetReadOpsPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetWriteBytesPerSecond`<sup>Required</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```go
func TargetWriteBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetWriteOpsPerSecond`<sup>Required</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```go
func TargetWriteOpsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">ResetTargetReceivedBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">ResetTargetReceivedPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">ResetTargetSentBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">ResetTargetSentPacketsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReceivedBytesPerSecond` <a name="ResetTargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```go
func ResetTargetReceivedBytesPerSecond()
```

##### `ResetTargetReceivedPacketsPerSecond` <a name="ResetTargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```go
func ResetTargetReceivedPacketsPerSecond()
```

##### `ResetTargetSentBytesPerSecond` <a name="ResetTargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```go
func ResetTargetSentBytesPerSecond()
```

##### `ResetTargetSentPacketsPerSecond` <a name="ResetTargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```go
func ResetTargetSentPacketsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">TargetReceivedBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">TargetReceivedPacketsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">TargetSentBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">TargetSentPacketsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetReceivedBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```go
func TargetReceivedBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReceivedPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```go
func TargetReceivedPacketsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetSentBytesPerSecondInput`<sup>Optional</sup> <a name="TargetSentBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```go
func TargetSentBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetSentPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetSentPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```go
func TargetSentPacketsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReceivedBytesPerSecond`<sup>Required</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```go
func TargetReceivedBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetReceivedPacketsPerSecond`<sup>Required</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```go
func TargetReceivedPacketsPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetSentBytesPerSecond`<sup>Required</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```go
func TargetSentBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetSentPacketsPerSecond`<sup>Required</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```go
func TargetSentPacketsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">PutDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">PutNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">PutRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">ResetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">ResetDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">ResetMaxTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">ResetMinTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">ResetNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">ResetRequestUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```go
func PutCpuUtilization(value GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `PutDiskUtilization` <a name="PutDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```go
func PutDiskUtilization(value GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `PutNetworkUtilization` <a name="PutNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```go
func PutNetworkUtilization(value GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `PutRequestUtilization` <a name="PutRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```go
func PutRequestUtilization(value GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `ResetCoolDownPeriod` <a name="ResetCoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```go
func ResetCoolDownPeriod()
```

##### `ResetDiskUtilization` <a name="ResetDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```go
func ResetDiskUtilization()
```

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```go
func ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```go
func ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```go
func ResetMaxPendingLatency()
```

##### `ResetMaxTotalInstances` <a name="ResetMaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```go
func ResetMaxTotalInstances()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```go
func ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```go
func ResetMinPendingLatency()
```

##### `ResetMinTotalInstances` <a name="ResetMinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```go
func ResetMinTotalInstances()
```

##### `ResetNetworkUtilization` <a name="ResetNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```go
func ResetNetworkUtilization()
```

##### `ResetRequestUtilization` <a name="ResetRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```go
func ResetRequestUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">CoolDownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">DiskUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">MaxTotalInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">MinTotalInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">NetworkUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">RequestUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">MinTotalInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```go
func CpuUtilization() GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `DiskUtilization`<sup>Required</sup> <a name="DiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```go
func DiskUtilization() GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `NetworkUtilization`<sup>Required</sup> <a name="NetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```go
func NetworkUtilization() GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `RequestUtilization`<sup>Required</sup> <a name="RequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```go
func RequestUtilization() GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `CoolDownPeriodInput`<sup>Optional</sup> <a name="CoolDownPeriodInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```go
func CoolDownPeriodInput() *string
```

- *Type:* *string

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```go
func CpuUtilizationInput() GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `DiskUtilizationInput`<sup>Optional</sup> <a name="DiskUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```go
func DiskUtilizationInput() GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```go
func MaxConcurrentRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```go
func MaxIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```go
func MaxPendingLatencyInput() *string
```

- *Type:* *string

---

##### `MaxTotalInstancesInput`<sup>Optional</sup> <a name="MaxTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```go
func MaxTotalInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```go
func MinIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```go
func MinPendingLatencyInput() *string
```

- *Type:* *string

---

##### `MinTotalInstancesInput`<sup>Optional</sup> <a name="MinTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```go
func MinTotalInstancesInput() *f64
```

- *Type:* *f64

---

##### `NetworkUtilizationInput`<sup>Optional</sup> <a name="NetworkUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```go
func NetworkUtilizationInput() GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `RequestUtilizationInput`<sup>Optional</sup> <a name="RequestUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```go
func RequestUtilizationInput() GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `CoolDownPeriod`<sup>Required</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```go
func CoolDownPeriod() *string
```

- *Type:* *string

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```go
func MaxConcurrentRequests() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```go
func MaxIdleInstances() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```go
func MaxPendingLatency() *string
```

- *Type:* *string

---

##### `MaxTotalInstances`<sup>Required</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```go
func MaxTotalInstances() *f64
```

- *Type:* *f64

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```go
func MinIdleInstances() *f64
```

- *Type:* *f64

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```go
func MinPendingLatency() *string
```

- *Type:* *string

---

##### `MinTotalInstances`<sup>Required</sup> <a name="MinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```go
func MinTotalInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">ResetTargetConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">ResetTargetRequestCountPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetConcurrentRequests` <a name="ResetTargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```go
func ResetTargetConcurrentRequests()
```

##### `ResetTargetRequestCountPerSecond` <a name="ResetTargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```go
func ResetTargetRequestCountPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">TargetConcurrentRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">TargetRequestCountPerSecondInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetConcurrentRequestsInput`<sup>Optional</sup> <a name="TargetConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```go
func TargetConcurrentRequestsInput() *f64
```

- *Type:* *f64

---

##### `TargetRequestCountPerSecondInput`<sup>Optional</sup> <a name="TargetRequestCountPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```go
func TargetRequestCountPerSecondInput() *string
```

- *Type:* *string

---

##### `TargetConcurrentRequests`<sup>Required</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```go
func TargetConcurrentRequests() *f64
```

- *Type:* *f64

---

##### `TargetRequestCountPerSecond`<sup>Required</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```go
func TargetRequestCountPerSecond() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">ResetCloudBuildTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudBuildTimeout` <a name="ResetCloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```go
func ResetCloudBuildTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">AppYamlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">CloudBuildTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">AppYamlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppYamlPathInput`<sup>Optional</sup> <a name="AppYamlPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```go
func AppYamlPathInput() *string
```

- *Type:* *string

---

##### `CloudBuildTimeoutInput`<sup>Optional</sup> <a name="CloudBuildTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```go
func CloudBuildTimeoutInput() *string
```

- *Type:* *string

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```go
func AppYamlPath() *string
```

- *Type:* *string

---

##### `CloudBuildTimeout`<sup>Required</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```go
func CloudBuildTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesList <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentFilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineFlexibleAppVersionDeploymentFilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```go
func Get(index *f64) GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```go
func ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```go
func Sha1SumInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```go
func Sha1Sum() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionDeploymentOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">PutCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">ResetCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudBuildOptions` <a name="PutCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```go
func PutCloudBuildOptions(value GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```go
func PutContainer(value GoogleAppEngineFlexibleAppVersionDeploymentContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `PutFiles` <a name="PutFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```go
func PutFiles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZip` <a name="PutZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```go
func PutZip(value GoogleAppEngineFlexibleAppVersionDeploymentZip)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `ResetCloudBuildOptions` <a name="ResetCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```go
func ResetCloudBuildOptions()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```go
func ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```go
func ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">CloudBuildOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudBuildOptions`<sup>Required</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```go
func CloudBuildOptions() GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```go
func Container() GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```go
func Files() GoogleAppEngineFlexibleAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```go
func Zip() GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `CloudBuildOptionsInput`<sup>Optional</sup> <a name="CloudBuildOptionsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```go
func CloudBuildOptionsInput() GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```go
func ContainerInput() GoogleAppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```go
func FilesInput() interface{}
```

- *Type:* interface{}

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```go
func ZipInput() GoogleAppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```go
func ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```go
func FilesCountInput() *f64
```

- *Type:* *f64

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```go
func FilesCount() *f64
```

- *Type:* *f64

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---


### GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">ResetDisableTraceSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">ResetRolloutStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```go
func ResetConfigId()
```

##### `ResetDisableTraceSampling` <a name="ResetDisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```go
func ResetDisableTraceSampling()
```

##### `ResetRolloutStrategy` <a name="ResetRolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```go
func ResetRolloutStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">DisableTraceSamplingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">RolloutStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">RolloutStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `DisableTraceSamplingInput`<sup>Optional</sup> <a name="DisableTraceSamplingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```go
func DisableTraceSamplingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RolloutStrategyInput`<sup>Optional</sup> <a name="RolloutStrategyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```go
func RolloutStrategyInput() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `DisableTraceSampling`<sup>Required</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```go
func DisableTraceSampling() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolloutStrategy`<sup>Required</sup> <a name="RolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```go
func RolloutStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---


### GoogleAppEngineFlexibleAppVersionEntrypointOutputReference <a name="GoogleAppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionEntrypointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionEntrypointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```go
func ShellInput() *string
```

- *Type:* *string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```go
func Shell() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---


### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion"></a>

```go
func ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersList <a name="GoogleAppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineFlexibleAppVersionHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get"></a>

```go
func Get(index *f64) GoogleAppEngineFlexibleAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionHandlersOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineFlexibleAppVersionHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```go
func PutScript(value GoogleAppEngineFlexibleAppVersionHandlersScript)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

```go
func PutStaticFiles(value GoogleAppEngineFlexibleAppVersionHandlersStaticFiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```go
func ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```go
func ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```go
func ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```go
func ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```go
func Script() GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```go
func StaticFiles() GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```go
func AuthFailActionInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```go
func RedirectHttpResponseCodeInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```go
func ScriptInput() GoogleAppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```go
func StaticFilesInput() GoogleAppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```go
func UrlRegexInput() *string
```

- *Type:* *string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```go
func AuthFailAction() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```go
func RedirectHttpResponseCode() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```go
func UrlRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```go
func ScriptPathInput() *string
```

- *Type:* *string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```go
func ScriptPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```go
func ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```go
func ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```go
func ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```go
func ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```go
func ApplicationReadableInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```go
func RequireMatchingFileInput() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```go
func UploadPathRegexInput() *string
```

- *Type:* *string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```go
func ApplicationReadable() interface{}
```

- *Type:* interface{}

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```go
func RequireMatchingFile() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```go
func UploadPathRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```go
func ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```go
func CheckIntervalInput() *string
```

- *Type:* *string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```go
func CheckInterval() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionManualScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionManualScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionManualScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---


### GoogleAppEngineFlexibleAppVersionNetworkOutputReference <a name="GoogleAppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">ResetForwardedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode">ResetInstanceIpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">ResetInstanceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardedPorts` <a name="ResetForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```go
func ResetForwardedPorts()
```

##### `ResetInstanceIpMode` <a name="ResetInstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode"></a>

```go
func ResetInstanceIpMode()
```

##### `ResetInstanceTag` <a name="ResetInstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```go
func ResetInstanceTag()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">ForwardedPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput">InstanceIpModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">InstanceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">ForwardedPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode">InstanceIpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">InstanceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedPortsInput`<sup>Optional</sup> <a name="ForwardedPortsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```go
func ForwardedPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceIpModeInput`<sup>Optional</sup> <a name="InstanceIpModeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput"></a>

```go
func InstanceIpModeInput() *string
```

- *Type:* *string

---

##### `InstanceTagInput`<sup>Optional</sup> <a name="InstanceTagInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```go
func InstanceTagInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `ForwardedPorts`<sup>Required</sup> <a name="ForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```go
func ForwardedPorts() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceIpMode`<sup>Required</sup> <a name="InstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode"></a>

```go
func InstanceIpMode() *string
```

- *Type:* *string

---

##### `InstanceTag`<sup>Required</sup> <a name="InstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```go
func InstanceTag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```go
func SessionAffinity() interface{}
```

- *Type:* interface{}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---


### GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">ResetAppStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppStartTimeout` <a name="ResetAppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```go
func ResetAppStartTimeout()
```

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```go
func ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">AppStartTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">AppStartTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppStartTimeoutInput`<sup>Optional</sup> <a name="AppStartTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```go
func AppStartTimeoutInput() *string
```

- *Type:* *string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```go
func CheckIntervalInput() *string
```

- *Type:* *string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `AppStartTimeout`<sup>Required</sup> <a name="AppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```go
func AppStartTimeout() *string
```

- *Type:* *string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```go
func CheckInterval() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">ResetDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetDiskGb` <a name="ResetDiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```go
func ResetDiskGb()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">DiskGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">DiskGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```go
func Volumes() GoogleAppEngineFlexibleAppVersionResourcesVolumesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `DiskGbInput`<sup>Optional</sup> <a name="DiskGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```go
func DiskGbInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `DiskGb`<sup>Required</sup> <a name="DiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```go
func DiskGb() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesList <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionResourcesVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAppEngineFlexibleAppVersionResourcesVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```go
func Get(index *f64) GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference <a name="GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleappengineflexibleappversion"

googleappengineflexibleappversion.NewGoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---



