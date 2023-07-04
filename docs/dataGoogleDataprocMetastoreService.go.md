# `data_google_dataproc_metastore_service`

Refer to the Terraform Registory for docs: [`data_google_dataproc_metastore_service`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service).

# `dataGoogleDataprocMetastoreService` Submodule <a name="`dataGoogleDataprocMetastoreService` Submodule" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataprocMetastoreService <a name="DataGoogleDataprocMetastoreService" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreService(scope Construct, id *string, config DataGoogleDataprocMetastoreServiceConfig) DataGoogleDataprocMetastoreService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig">DataGoogleDataprocMetastoreServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig">DataGoogleDataprocMetastoreServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri">ArtifactGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig">HiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration">MetadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel">ReleaseChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ArtifactGcsUri`<sup>Required</sup> <a name="ArtifactGcsUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```go
func ArtifactGcsUri() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.encryptionConfig"></a>

```go
func EncryptionConfig() DataGoogleDataprocMetastoreServiceEncryptionConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList">DataGoogleDataprocMetastoreServiceEncryptionConfigList</a>

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `HiveMetastoreConfig`<sup>Required</sup> <a name="HiveMetastoreConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```go
func HiveMetastoreConfig() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataGoogleDataprocMetastoreServiceMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList">DataGoogleDataprocMetastoreServiceMaintenanceWindowList</a>

---

##### `MetadataIntegration`<sup>Required</sup> <a name="MetadataIntegration" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.metadataIntegration"></a>

```go
func MetadataIntegration() DataGoogleDataprocMetastoreServiceMetadataIntegrationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList">DataGoogleDataprocMetastoreServiceMetadataIntegrationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.networkConfig"></a>

```go
func NetworkConfig() DataGoogleDataprocMetastoreServiceNetworkConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList">DataGoogleDataprocMetastoreServiceNetworkConfigList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReleaseChannel`<sup>Required</sup> <a name="ReleaseChannel" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.releaseChannel"></a>

```go
func ReleaseChannel() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.telemetryConfig"></a>

```go
func TelemetryConfig() DataGoogleDataprocMetastoreServiceTelemetryConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList">DataGoogleDataprocMetastoreServiceTelemetryConfigList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataprocMetastoreServiceConfig <a name="DataGoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ServiceId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#location DataGoogleDataprocMetastoreService#location}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#service_id DataGoogleDataprocMetastoreService#service_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#id DataGoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_dataproc_metastore_service#project DataGoogleDataprocMetastoreService#project}.

---

### DataGoogleDataprocMetastoreServiceEncryptionConfig <a name="DataGoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceEncryptionConfig {

}
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig {

}
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions {

}
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig {

}
```


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {

}
```


### DataGoogleDataprocMetastoreServiceMaintenanceWindow <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceMaintenanceWindow {

}
```


### DataGoogleDataprocMetastoreServiceMetadataIntegration <a name="DataGoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceMetadataIntegration {

}
```


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig {

}
```


### DataGoogleDataprocMetastoreServiceNetworkConfig <a name="DataGoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceNetworkConfig {

}
```


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers {

}
```


### DataGoogleDataprocMetastoreServiceTelemetryConfig <a name="DataGoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

&datagoogledataprocmetastoreservice.DataGoogleDataprocMetastoreServiceTelemetryConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataprocMetastoreServiceEncryptionConfigList <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceEncryptionConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceEncryptionConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceEncryptionConfig">DataGoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">ConfigOverrides</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigOverrides`<sup>Required</sup> <a name="ConfigOverrides" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```go
func ConfigOverrides() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">CloudSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSecret`<sup>Required</sup> <a name="CloudSecret" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```go
func CloudSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">Keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">Krb5ConfigGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Keytab`<sup>Required</sup> <a name="Keytab" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```go
func Keytab() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList</a>

---

##### `Krb5ConfigGcsUri`<sup>Required</sup> <a name="Krb5ConfigGcsUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```go
func Krb5ConfigGcsUri() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">AuxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">ConfigOverrides</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">EndpointProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">KerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuxiliaryVersions`<sup>Required</sup> <a name="AuxiliaryVersions" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```go
func AuxiliaryVersions() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `ConfigOverrides`<sup>Required</sup> <a name="ConfigOverrides" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```go
func ConfigOverrides() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EndpointProtocol`<sup>Required</sup> <a name="EndpointProtocol" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```go
func EndpointProtocol() *string
```

- *Type:* *string

---

##### `KerberosConfig`<sup>Required</sup> <a name="KerberosConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```go
func KerberosConfig() DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList">DataGoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceHiveMetastoreConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceHiveMetastoreConfig">DataGoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowList <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMaintenanceWindow">DataGoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationList <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMetadataIntegrationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceMetadataIntegrationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCatalogConfig`<sup>Required</sup> <a name="DataCatalogConfig" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```go
func DataCatalogConfig() DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList">DataGoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceMetadataIntegration
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceMetadataIntegration">DataGoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceNetworkConfigConsumersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceNetworkConfigConsumers
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumers">DataGoogleDataprocMetastoreServiceNetworkConfigConsumers</a>

---


### DataGoogleDataprocMetastoreServiceNetworkConfigList <a name="DataGoogleDataprocMetastoreServiceNetworkConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceNetworkConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceNetworkConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">Consumers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Consumers`<sup>Required</sup> <a name="Consumers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```go
func Consumers() DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList">DataGoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceNetworkConfig">DataGoogleDataprocMetastoreServiceNetworkConfig</a>

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigList <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigList" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceTelemetryConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleDataprocMetastoreServiceTelemetryConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get"></a>

```go
func Get(index *f64) DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogledataprocmetastoreservice"

datagoogledataprocmetastoreservice.NewDataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleDataprocMetastoreServiceTelemetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataprocMetastoreService.DataGoogleDataprocMetastoreServiceTelemetryConfig">DataGoogleDataprocMetastoreServiceTelemetryConfig</a>

---



