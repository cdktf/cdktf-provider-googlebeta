# `googleBigqueryAnalyticsHubDataExchange` Submodule <a name="`googleBigqueryAnalyticsHubDataExchange` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchange <a name="GoogleBigqueryAnalyticsHubDataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.NewGoogleBigqueryAnalyticsHubDataExchange(scope Construct, id *string, config GoogleBigqueryAnalyticsHubDataExchangeConfig) GoogleBigqueryAnalyticsHubDataExchange
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig">PutSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig">ResetSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSharingEnvironmentConfig` <a name="PutSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig"></a>

```go
func PutSharingEnvironmentConfig(value GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryAnalyticsHubDataExchangeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation"></a>

```go
func ResetDocumentation()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon"></a>

```go
func ResetIcon()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId"></a>

```go
func ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact"></a>

```go
func ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSharingEnvironmentConfig` <a name="ResetSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig"></a>

```go
func ResetSharingEnvironmentConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchange_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchange_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchange_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchange_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryAnalyticsHubDataExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount">ListingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig">SharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput">DocumentationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput">IconInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput">PrimaryContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput">SharingEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation">Documentation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon">Icon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ListingCount`<sup>Required</sup> <a name="ListingCount" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount"></a>

```go
func ListingCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharingEnvironmentConfig`<sup>Required</sup> <a name="SharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig"></a>

```go
func SharingEnvironmentConfig() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput"></a>

```go
func DocumentationInput() *string
```

- *Type:* *string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput"></a>

```go
func IconInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput"></a>

```go
func PrimaryContactInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SharingEnvironmentConfigInput`<sup>Optional</sup> <a name="SharingEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput"></a>

```go
func SharingEnvironmentConfigInput() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation"></a>

```go
func Documentation() *string
```

- *Type:* *string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon"></a>

```go
func Icon() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact"></a>

```go
func PrimaryContact() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

&googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchangeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	DisplayName: *string,
	Location: *string,
	Description: *string,
	Documentation: *string,
	Icon: *string,
	Id: *string,
	PrimaryContact: *string,
	Project: *string,
	SharingEnvironmentConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description">Description</a></code> | <code>*string</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation">Documentation</a></code> | <code>*string</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon">Icon</a></code> | <code>*string</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig">SharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | sharing_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#data_exchange_id GoogleBigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#display_name GoogleBigqueryAnalyticsHubDataExchange#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#location GoogleBigqueryAnalyticsHubDataExchange#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#description GoogleBigqueryAnalyticsHubDataExchange#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation"></a>

```go
Documentation *string
```

- *Type:* *string

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#documentation GoogleBigqueryAnalyticsHubDataExchange#documentation}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon"></a>

```go
Icon *string
```

- *Type:* *string

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#icon GoogleBigqueryAnalyticsHubDataExchange#icon}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact"></a>

```go
PrimaryContact *string
```

- *Type:* *string

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#primary_contact GoogleBigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}.

---

##### `SharingEnvironmentConfig`<sup>Optional</sup> <a name="SharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig"></a>

```go
SharingEnvironmentConfig GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

sharing_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#sharing_environment_config GoogleBigqueryAnalyticsHubDataExchange#sharing_environment_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryAnalyticsHubDataExchangeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#timeouts GoogleBigqueryAnalyticsHubDataExchange#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

&googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig {
	DcrExchangeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig,
	DefaultExchangeConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig">DcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | dcr_exchange_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig">DefaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | default_exchange_config block. |

---

##### `DcrExchangeConfig`<sup>Optional</sup> <a name="DcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig"></a>

```go
DcrExchangeConfig GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

dcr_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#dcr_exchange_config GoogleBigqueryAnalyticsHubDataExchange#dcr_exchange_config}

---

##### `DefaultExchangeConfig`<sup>Optional</sup> <a name="DefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig"></a>

```go
DefaultExchangeConfig GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

default_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#default_exchange_config GoogleBigqueryAnalyticsHubDataExchange#default_exchange_config}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

&googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig {

}
```


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

&googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig {

}
```


### GoogleBigqueryAnalyticsHubDataExchangeTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

&googlebigqueryanalyticshubdataexchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.NewGoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.NewGoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.NewGoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig">PutDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig">PutDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig">ResetDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig">ResetDefaultExchangeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDcrExchangeConfig` <a name="PutDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig"></a>

```go
func PutDcrExchangeConfig(value GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `PutDefaultExchangeConfig` <a name="PutDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig"></a>

```go
func PutDefaultExchangeConfig(value GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `ResetDcrExchangeConfig` <a name="ResetDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig"></a>

```go
func ResetDcrExchangeConfig()
```

##### `ResetDefaultExchangeConfig` <a name="ResetDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig"></a>

```go
func ResetDefaultExchangeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig">DcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig">DefaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput">DcrExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput">DefaultExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DcrExchangeConfig`<sup>Required</sup> <a name="DcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig"></a>

```go
func DcrExchangeConfig() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a>

---

##### `DefaultExchangeConfig`<sup>Required</sup> <a name="DefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig"></a>

```go
func DefaultExchangeConfig() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a>

---

##### `DcrExchangeConfigInput`<sup>Optional</sup> <a name="DcrExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput"></a>

```go
func DcrExchangeConfigInput() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `DefaultExchangeConfigInput`<sup>Optional</sup> <a name="DefaultExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput"></a>

```go
func DefaultExchangeConfigInput() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryanalyticshubdataexchange"

googlebigqueryanalyticshubdataexchange.NewGoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



