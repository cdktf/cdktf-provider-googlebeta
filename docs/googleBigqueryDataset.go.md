# `google_bigquery_dataset`

Refer to the Terraform Registory for docs: [`google_bigquery_dataset`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset).

# `googleBigqueryDataset` Submodule <a name="`googleBigqueryDataset` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataset <a name="GoogleBigqueryDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset google_bigquery_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDataset(scope Construct, id *string, config GoogleBigqueryDatasetConfig) GoogleBigqueryDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig">GoogleBigqueryDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig">GoogleBigqueryDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess">PutAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration">PutDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultCollation">ResetDefaultCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultEncryptionConfiguration">ResetDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultPartitionExpirationMs">ResetDefaultPartitionExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultTableExpirationMs">ResetDefaultTableExpirationMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDeleteContentsOnDestroy">ResetDeleteContentsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetIsCaseInsensitive">ResetIsCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetMaxTimeTravelHours">ResetMaxTimeTravelHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccess` <a name="PutAccess" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess"></a>

```go
func PutAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultEncryptionConfiguration` <a name="PutDefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration"></a>

```go
func PutDefaultEncryptionConfiguration(value GoogleBigqueryDatasetDefaultEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putDefaultEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryDatasetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetDefaultCollation` <a name="ResetDefaultCollation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultCollation"></a>

```go
func ResetDefaultCollation()
```

##### `ResetDefaultEncryptionConfiguration` <a name="ResetDefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultEncryptionConfiguration"></a>

```go
func ResetDefaultEncryptionConfiguration()
```

##### `ResetDefaultPartitionExpirationMs` <a name="ResetDefaultPartitionExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultPartitionExpirationMs"></a>

```go
func ResetDefaultPartitionExpirationMs()
```

##### `ResetDefaultTableExpirationMs` <a name="ResetDefaultTableExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDefaultTableExpirationMs"></a>

```go
func ResetDefaultTableExpirationMs()
```

##### `ResetDeleteContentsOnDestroy` <a name="ResetDeleteContentsOnDestroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDeleteContentsOnDestroy"></a>

```go
func ResetDeleteContentsOnDestroy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCaseInsensitive` <a name="ResetIsCaseInsensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetIsCaseInsensitive"></a>

```go
func ResetIsCaseInsensitive()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMaxTimeTravelHours` <a name="ResetMaxTimeTravelHours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetMaxTimeTravelHours"></a>

```go
func ResetMaxTimeTravelHours()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.GoogleBigqueryDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.GoogleBigqueryDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.GoogleBigqueryDataset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.access">Access</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList">GoogleBigqueryDatasetAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfiguration">DefaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference">GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference">GoogleBigqueryDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.accessInput">AccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollationInput">DefaultCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfigurationInput">DefaultEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMsInput">DefaultPartitionExpirationMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMsInput">DefaultTableExpirationMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroyInput">DeleteContentsOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitiveInput">IsCaseInsensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHoursInput">MaxTimeTravelHoursInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollation">DefaultCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMs">DefaultPartitionExpirationMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMs">DefaultTableExpirationMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroy">DeleteContentsOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitive">IsCaseInsensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHours">MaxTimeTravelHours</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.access"></a>

```go
func Access() GoogleBigqueryDatasetAccessList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList">GoogleBigqueryDatasetAccessList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `DefaultEncryptionConfiguration`<sup>Required</sup> <a name="DefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfiguration"></a>

```go
func DefaultEncryptionConfiguration() GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference">GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryDatasetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference">GoogleBigqueryDatasetTimeoutsOutputReference</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.accessInput"></a>

```go
func AccessInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DefaultCollationInput`<sup>Optional</sup> <a name="DefaultCollationInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollationInput"></a>

```go
func DefaultCollationInput() *string
```

- *Type:* *string

---

##### `DefaultEncryptionConfigurationInput`<sup>Optional</sup> <a name="DefaultEncryptionConfigurationInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultEncryptionConfigurationInput"></a>

```go
func DefaultEncryptionConfigurationInput() GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---

##### `DefaultPartitionExpirationMsInput`<sup>Optional</sup> <a name="DefaultPartitionExpirationMsInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMsInput"></a>

```go
func DefaultPartitionExpirationMsInput() *f64
```

- *Type:* *f64

---

##### `DefaultTableExpirationMsInput`<sup>Optional</sup> <a name="DefaultTableExpirationMsInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMsInput"></a>

```go
func DefaultTableExpirationMsInput() *f64
```

- *Type:* *f64

---

##### `DeleteContentsOnDestroyInput`<sup>Optional</sup> <a name="DeleteContentsOnDestroyInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroyInput"></a>

```go
func DeleteContentsOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCaseInsensitiveInput`<sup>Optional</sup> <a name="IsCaseInsensitiveInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitiveInput"></a>

```go
func IsCaseInsensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxTimeTravelHoursInput`<sup>Optional</sup> <a name="MaxTimeTravelHoursInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHoursInput"></a>

```go
func MaxTimeTravelHoursInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DefaultCollation`<sup>Required</sup> <a name="DefaultCollation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultCollation"></a>

```go
func DefaultCollation() *string
```

- *Type:* *string

---

##### `DefaultPartitionExpirationMs`<sup>Required</sup> <a name="DefaultPartitionExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultPartitionExpirationMs"></a>

```go
func DefaultPartitionExpirationMs() *f64
```

- *Type:* *f64

---

##### `DefaultTableExpirationMs`<sup>Required</sup> <a name="DefaultTableExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.defaultTableExpirationMs"></a>

```go
func DefaultTableExpirationMs() *f64
```

- *Type:* *f64

---

##### `DeleteContentsOnDestroy`<sup>Required</sup> <a name="DeleteContentsOnDestroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.deleteContentsOnDestroy"></a>

```go
func DeleteContentsOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCaseInsensitive`<sup>Required</sup> <a name="IsCaseInsensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.isCaseInsensitive"></a>

```go
func IsCaseInsensitive() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxTimeTravelHours`<sup>Required</sup> <a name="MaxTimeTravelHours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.maxTimeTravelHours"></a>

```go
func MaxTimeTravelHours() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatasetAccess <a name="GoogleBigqueryDatasetAccess" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetAccess {
	Dataset: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset,
	Domain: *string,
	GroupByEmail: *string,
	Role: *string,
	Routine: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine,
	SpecialGroup: *string,
	UserByEmail: *string,
	View: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.domain">Domain</a></code> | <code>*string</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.groupByEmail">GroupByEmail</a></code> | <code>*string</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.role">Role</a></code> | <code>*string</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.specialGroup">SpecialGroup</a></code> | <code>*string</code> | A special group to grant access to. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.userByEmail">UserByEmail</a></code> | <code>*string</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | view block. |

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.dataset"></a>

```go
Dataset GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#domain GoogleBigqueryDataset#domain}

---

##### `GroupByEmail`<sup>Optional</sup> <a name="GroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.groupByEmail"></a>

```go
GroupByEmail *string
```

- *Type:* *string

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#group_by_email GoogleBigqueryDataset#group_by_email}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.role"></a>

```go
Role *string
```

- *Type:* *string

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#role GoogleBigqueryDataset#role}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.routine"></a>

```go
Routine GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#routine GoogleBigqueryDataset#routine}

---

##### `SpecialGroup`<sup>Optional</sup> <a name="SpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.specialGroup"></a>

```go
SpecialGroup *string
```

- *Type:* *string

A special group to grant access to. Possible values include:.

'projectOwners': Owners of the enclosing project.

'projectReaders': Readers of the enclosing project.

'projectWriters': Writers of the enclosing project.

'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#special_group GoogleBigqueryDataset#special_group}

---

##### `UserByEmail`<sup>Optional</sup> <a name="UserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.userByEmail"></a>

```go
UserByEmail *string
```

- *Type:* *string

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#user_by_email GoogleBigqueryDataset#user_by_email}

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccess.property.view"></a>

```go
View GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#view GoogleBigqueryDataset#view}

---

### GoogleBigqueryDatasetAccessDataset <a name="GoogleBigqueryDatasetAccessDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetAccessDataset {
	Dataset: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset,
	TargetTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | Which resources in the dataset this entry applies to. |

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.dataset"></a>

```go
Dataset GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset.property.targetTypes"></a>

```go
TargetTypes *[]*string
```

- *Type:* *[]*string

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#target_types GoogleBigqueryDataset#target_types}

---

### GoogleBigqueryDatasetAccessDatasetDataset <a name="GoogleBigqueryDatasetAccessDatasetDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetAccessDatasetDataset {
	DatasetId: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

### GoogleBigqueryDatasetAccessRoutine <a name="GoogleBigqueryDatasetAccessRoutine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetAccessRoutine {
	DatasetId: *string,
	ProjectId: *string,
	RoutineId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.routineId">RoutineId</a></code> | <code>*string</code> | The ID of the routine. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine.property.routineId"></a>

```go
RoutineId *string
```

- *Type:* *string

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#routine_id GoogleBigqueryDataset#routine_id}

---

### GoogleBigqueryDatasetAccessView <a name="GoogleBigqueryDatasetAccessView" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetAccessView {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.tableId">TableId</a></code> | <code>*string</code> | The ID of the table. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#table_id GoogleBigqueryDataset#table_id}

---

### GoogleBigqueryDatasetConfig <a name="GoogleBigqueryDatasetConfig" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	Access: interface{},
	DefaultCollation: *string,
	DefaultEncryptionConfiguration: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration,
	DefaultPartitionExpirationMs: *f64,
	DefaultTableExpirationMs: *f64,
	DeleteContentsOnDestroy: interface{},
	Description: *string,
	FriendlyName: *string,
	Id: *string,
	IsCaseInsensitive: interface{},
	Labels: *map[string]*string,
	Location: *string,
	MaxTimeTravelHours: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.access">Access</a></code> | <code>interface{}</code> | access block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultCollation">DefaultCollation</a></code> | <code>*string</code> | Defines the default collation specification of future tables created in the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultEncryptionConfiguration">DefaultEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | default_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultPartitionExpirationMs">DefaultPartitionExpirationMs</a></code> | <code>*f64</code> | The default partition expiration for all partitioned tables in the dataset, in milliseconds. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultTableExpirationMs">DefaultTableExpirationMs</a></code> | <code>*f64</code> | The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.deleteContentsOnDestroy">DeleteContentsOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', delete all the tables in the dataset when destroying the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.description">Description</a></code> | <code>*string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.isCaseInsensitive">IsCaseInsensitive</a></code> | <code>interface{}</code> | TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations). |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.maxTimeTravelHours">MaxTimeTravelHours</a></code> | <code>*string</code> | Defines the time travel window in hours. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.access"></a>

```go
Access interface{}
```

- *Type:* interface{}

access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#access GoogleBigqueryDataset#access}

---

##### `DefaultCollation`<sup>Optional</sup> <a name="DefaultCollation" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultCollation"></a>

```go
DefaultCollation *string
```

- *Type:* *string

Defines the default collation specification of future tables created in the dataset.

If a table is created in this dataset without table-level
default collation, then the table inherits the dataset default collation,
which is applied to the string fields that do not have explicit collation
specified. A change to this field affects only tables created afterwards,
and does not alter the existing tables.

The following values are supported:

* 'und:ci': undetermined locale, case insensitive.
* '': empty string. Default to case-sensitive behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#default_collation GoogleBigqueryDataset#default_collation}

---

##### `DefaultEncryptionConfiguration`<sup>Optional</sup> <a name="DefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultEncryptionConfiguration"></a>

```go
DefaultEncryptionConfiguration GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

default_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#default_encryption_configuration GoogleBigqueryDataset#default_encryption_configuration}

---

##### `DefaultPartitionExpirationMs`<sup>Optional</sup> <a name="DefaultPartitionExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultPartitionExpirationMs"></a>

```go
DefaultPartitionExpirationMs *f64
```

- *Type:* *f64

The default partition expiration for all partitioned tables in the dataset, in milliseconds.

Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#default_partition_expiration_ms GoogleBigqueryDataset#default_partition_expiration_ms}

---

##### `DefaultTableExpirationMs`<sup>Optional</sup> <a name="DefaultTableExpirationMs" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.defaultTableExpirationMs"></a>

```go
DefaultTableExpirationMs *f64
```

- *Type:* *f64

The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour).

Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#default_table_expiration_ms GoogleBigqueryDataset#default_table_expiration_ms}

---

##### `DeleteContentsOnDestroy`<sup>Optional</sup> <a name="DeleteContentsOnDestroy" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.deleteContentsOnDestroy"></a>

```go
DeleteContentsOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', delete all the tables in the dataset when destroying the resource;

otherwise,
destroying the resource will fail if tables are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#delete_contents_on_destroy GoogleBigqueryDataset#delete_contents_on_destroy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#description GoogleBigqueryDataset#description}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#friendly_name GoogleBigqueryDataset#friendly_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#id GoogleBigqueryDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCaseInsensitive`<sup>Optional</sup> <a name="IsCaseInsensitive" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.isCaseInsensitive"></a>

```go
IsCaseInsensitive interface{}
```

- *Type:* interface{}

TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.

By default, this is FALSE, which means the dataset and its table names are
case-sensitive. This field does not affect routine references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#is_case_insensitive GoogleBigqueryDataset#is_case_insensitive}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#labels GoogleBigqueryDataset#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the dataset should reside. See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).

There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.

The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#location GoogleBigqueryDataset#location}

---

##### `MaxTimeTravelHours`<sup>Optional</sup> <a name="MaxTimeTravelHours" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.maxTimeTravelHours"></a>

```go
MaxTimeTravelHours *string
```

- *Type:* *string

Defines the time travel window in hours.

The value can be from 48 to 168 hours (2 to 7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#max_time_travel_hours GoogleBigqueryDataset#max_time_travel_hours}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#project GoogleBigqueryDataset#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryDatasetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts">GoogleBigqueryDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#timeouts GoogleBigqueryDataset#timeouts}

---

### GoogleBigqueryDatasetDefaultEncryptionConfiguration <a name="GoogleBigqueryDatasetDefaultEncryptionConfiguration" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires
access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#kms_key_name GoogleBigqueryDataset#kms_key_name}

---

### GoogleBigqueryDatasetTimeouts <a name="GoogleBigqueryDatasetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

&googlebigquerydataset.GoogleBigqueryDatasetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#create GoogleBigqueryDataset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#update GoogleBigqueryDataset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#create GoogleBigqueryDataset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_bigquery_dataset#update GoogleBigqueryDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatasetAccessDatasetDatasetOutputReference <a name="GoogleBigqueryDatasetAccessDatasetDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessDatasetDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessDatasetDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

---


### GoogleBigqueryDatasetAccessDatasetOutputReference <a name="GoogleBigqueryDatasetAccessDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset">PutDataset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset"></a>

```go
func PutDataset(value GoogleBigqueryDatasetAccessDatasetDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput">TargetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.dataset"></a>

```go
func Dataset() GoogleBigqueryDatasetAccessDatasetDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.datasetInput"></a>

```go
func DatasetInput() GoogleBigqueryDatasetAccessDatasetDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetDataset">GoogleBigqueryDatasetAccessDatasetDataset</a>

---

##### `TargetTypesInput`<sup>Optional</sup> <a name="TargetTypesInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypesInput"></a>

```go
func TargetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.targetTypes"></a>

```go
func TargetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

---


### GoogleBigqueryDatasetAccessList <a name="GoogleBigqueryDatasetAccessList" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryDatasetAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get"></a>

```go
func Get(index *f64) GoogleBigqueryDatasetAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigqueryDatasetAccessOutputReference <a name="GoogleBigqueryDatasetAccessOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryDatasetAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetGroupByEmail">ResetGroupByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetSpecialGroup">ResetSpecialGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetUserByEmail">ResetUserByEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetView">ResetView</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset"></a>

```go
func PutDataset(value GoogleBigqueryDatasetAccessDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine"></a>

```go
func PutRoutine(value GoogleBigqueryDatasetAccessRoutine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView"></a>

```go
func PutView(value GoogleBigqueryDatasetAccessView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetGroupByEmail` <a name="ResetGroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetGroupByEmail"></a>

```go
func ResetGroupByEmail()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetRoutine"></a>

```go
func ResetRoutine()
```

##### `ResetSpecialGroup` <a name="ResetSpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetSpecialGroup"></a>

```go
func ResetSpecialGroup()
```

##### `ResetUserByEmail` <a name="ResetUserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetUserByEmail"></a>

```go
func ResetUserByEmail()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.resetView"></a>

```go
func ResetView()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routine">Routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference">GoogleBigqueryDatasetAccessRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.view">View</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference">GoogleBigqueryDatasetAccessViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmailInput">GroupByEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroupInput">SpecialGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmailInput">UserByEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.viewInput">ViewInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmail">GroupByEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroup">SpecialGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmail">UserByEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.dataset"></a>

```go
func Dataset() GoogleBigqueryDatasetAccessDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDatasetOutputReference">GoogleBigqueryDatasetAccessDatasetOutputReference</a>

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routine"></a>

```go
func Routine() GoogleBigqueryDatasetAccessRoutineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference">GoogleBigqueryDatasetAccessRoutineOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.view"></a>

```go
func View() GoogleBigqueryDatasetAccessViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference">GoogleBigqueryDatasetAccessViewOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.datasetInput"></a>

```go
func DatasetInput() GoogleBigqueryDatasetAccessDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessDataset">GoogleBigqueryDatasetAccessDataset</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `GroupByEmailInput`<sup>Optional</sup> <a name="GroupByEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmailInput"></a>

```go
func GroupByEmailInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.routineInput"></a>

```go
func RoutineInput() GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

---

##### `SpecialGroupInput`<sup>Optional</sup> <a name="SpecialGroupInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroupInput"></a>

```go
func SpecialGroupInput() *string
```

- *Type:* *string

---

##### `UserByEmailInput`<sup>Optional</sup> <a name="UserByEmailInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmailInput"></a>

```go
func UserByEmailInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.viewInput"></a>

```go
func ViewInput() GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `GroupByEmail`<sup>Required</sup> <a name="GroupByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.groupByEmail"></a>

```go
func GroupByEmail() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SpecialGroup`<sup>Required</sup> <a name="SpecialGroup" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.specialGroup"></a>

```go
func SpecialGroup() *string
```

- *Type:* *string

---

##### `UserByEmail`<sup>Required</sup> <a name="UserByEmail" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.userByEmail"></a>

```go
func UserByEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigqueryDatasetAccessRoutineOutputReference <a name="GoogleBigqueryDatasetAccessRoutineOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessRoutineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessRoutineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineIdInput">RoutineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId">RoutineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineIdInput"></a>

```go
func RoutineIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.routineId"></a>

```go
func RoutineId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutineOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessRoutine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessRoutine">GoogleBigqueryDatasetAccessRoutine</a>

---


### GoogleBigqueryDatasetAccessViewOutputReference <a name="GoogleBigqueryDatasetAccessViewOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetAccessViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetAccessViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessViewOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetAccessView
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetAccessView">GoogleBigqueryDatasetAccessView</a>

---


### GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference <a name="GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryDatasetDefaultEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetDefaultEncryptionConfiguration">GoogleBigqueryDatasetDefaultEncryptionConfiguration</a>

---


### GoogleBigqueryDatasetTimeoutsOutputReference <a name="GoogleBigqueryDatasetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigquerydataset"

googlebigquerydataset.NewGoogleBigqueryDatasetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryDatasetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDataset.GoogleBigqueryDatasetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



