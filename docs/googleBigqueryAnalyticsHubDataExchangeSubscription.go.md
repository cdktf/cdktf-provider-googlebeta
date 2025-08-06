# `googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscription <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription google_bigquery_analytics_hub_data_exchange_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscription(scope Construct, id *string, config GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig) GoogleBigqueryAnalyticsHubDataExchangeSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset">PutDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset">ResetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy">ResetRefreshPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact">ResetSubscriberContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDataset` <a name="PutDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset"></a>

```go
func PutDestinationDataset(value GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `ResetDestinationDataset` <a name="ResetDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset"></a>

```go
func ResetDestinationDataset()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRefreshPolicy` <a name="ResetRefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy"></a>

```go
func ResetRefreshPolicy()
```

##### `ResetSubscriberContact` <a name="ResetSubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact"></a>

```go
func ResetSubscriberContact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange">DataExchange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime">LastModifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap">LinkedDatasetMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources">LinkedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail">LogLinkedDatasetQueryUserEmail</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName">OrganizationDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput">DataExchangeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput">DataExchangeProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput">DestinationDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput">RefreshPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput">SubscriberContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation">DataExchangeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject">DataExchangeProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy">RefreshPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact">SubscriberContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DataExchange`<sup>Required</sup> <a name="DataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange"></a>

```go
func DataExchange() *string
```

- *Type:* *string

---

##### `DestinationDataset`<sup>Required</sup> <a name="DestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset"></a>

```go
func DestinationDataset() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a>

---

##### `LastModifyTime`<sup>Required</sup> <a name="LastModifyTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime"></a>

```go
func LastModifyTime() *string
```

- *Type:* *string

---

##### `LinkedDatasetMap`<sup>Required</sup> <a name="LinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap"></a>

```go
func LinkedDatasetMap() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a>

---

##### `LinkedResources`<sup>Required</sup> <a name="LinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources"></a>

```go
func LinkedResources() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a>

---

##### `LogLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="LogLinkedDatasetQueryUserEmail" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```go
func LogLinkedDatasetQueryUserEmail() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationDisplayName`<sup>Required</sup> <a name="OrganizationDisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName"></a>

```go
func OrganizationDisplayName() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DataExchangeLocationInput`<sup>Optional</sup> <a name="DataExchangeLocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput"></a>

```go
func DataExchangeLocationInput() *string
```

- *Type:* *string

---

##### `DataExchangeProjectInput`<sup>Optional</sup> <a name="DataExchangeProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput"></a>

```go
func DataExchangeProjectInput() *string
```

- *Type:* *string

---

##### `DestinationDatasetInput`<sup>Optional</sup> <a name="DestinationDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput"></a>

```go
func DestinationDatasetInput() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RefreshPolicyInput`<sup>Optional</sup> <a name="RefreshPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput"></a>

```go
func RefreshPolicyInput() *string
```

- *Type:* *string

---

##### `SubscriberContactInput`<sup>Optional</sup> <a name="SubscriberContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput"></a>

```go
func SubscriberContactInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `DataExchangeLocation`<sup>Required</sup> <a name="DataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation"></a>

```go
func DataExchangeLocation() *string
```

- *Type:* *string

---

##### `DataExchangeProject`<sup>Required</sup> <a name="DataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject"></a>

```go
func DataExchangeProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RefreshPolicy`<sup>Required</sup> <a name="RefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy"></a>

```go
func RefreshPolicy() *string
```

- *Type:* *string

---

##### `SubscriberContact`<sup>Required</sup> <a name="SubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact"></a>

```go
func SubscriberContact() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	DataExchangeLocation: *string,
	DataExchangeProject: *string,
	Location: *string,
	SubscriptionId: *string,
	DestinationDataset: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset,
	Id: *string,
	Project: *string,
	RefreshPolicy: *string,
	SubscriberContact: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation">DataExchangeLocation</a></code> | <code>*string</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject">DataExchangeProject</a></code> | <code>*string</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset">DestinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy">RefreshPolicy</a></code> | <code>*string</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact">SubscriberContact</a></code> | <code>*string</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `DataExchangeLocation`<sup>Required</sup> <a name="DataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation"></a>

```go
DataExchangeLocation *string
```

- *Type:* *string

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `DataExchangeProject`<sup>Required</sup> <a name="DataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject"></a>

```go
DataExchangeProject *string
```

- *Type:* *string

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `DestinationDataset`<sup>Optional</sup> <a name="DestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset"></a>

```go
DestinationDataset GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `RefreshPolicy`<sup>Optional</sup> <a name="RefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy"></a>

```go
RefreshPolicy *string
```

- *Type:* *string

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `SubscriberContact`<sup>Optional</sup> <a name="SubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact"></a>

```go
SubscriberContact *string
```

- *Type:* *string

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset {
	DatasetReference: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference,
	Location: *string,
	Description: *string,
	FriendlyName: *string,
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location">Location</a></code> | <code>*string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description">Description</a></code> | <code>*string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference"></a>

```go
DatasetReference GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this dataset. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap {

}
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources {

}
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

&googlebigqueryanalyticshubdataexchangesubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference">PutDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetReference` <a name="PutDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```go
func PutDatasetReference(value GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference">DatasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">DatasetReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetReference`<sup>Required</sup> <a name="DatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```go
func DatasetReference() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `DatasetReferenceInput`<sup>Optional</sup> <a name="DatasetReferenceInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```go
func DatasetReferenceInput() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">LinkedPubsubSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `LinkedPubsubSubscription`<sup>Required</sup> <a name="LinkedPubsubSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```go
func LinkedPubsubSubscription() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get"></a>

```go
func Get(index *f64) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset">LinkedDataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing">Listing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedDataset`<sup>Required</sup> <a name="LinkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```go
func LinkedDataset() *string
```

- *Type:* *string

---

##### `Listing`<sup>Required</sup> <a name="Listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```go
func Listing() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlebigqueryanalyticshubdataexchangesubscription"

googlebigqueryanalyticshubdataexchangesubscription.NewGoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



