# `google_redis_cluster`

Refer to the Terraform Registory for docs: [`google_redis_cluster`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster).

# `googleRedisCluster` Submodule <a name="`googleRedisCluster` Submodule" id="@cdktf/provider-google-beta.googleRedisCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisCluster <a name="GoogleRedisCluster" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster google_redis_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisCluster(scope Construct, id *string, config GoogleRedisClusterConfig) GoogleRedisCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig">GoogleRedisClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig">GoogleRedisClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs">PutPscConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode">ResetAuthorizationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode">ResetTransitEncryptionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPscConfigs` <a name="PutPscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs"></a>

```go
func PutPscConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putPscConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleRedisClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

---

##### `ResetAuthorizationMode` <a name="ResetAuthorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetAuthorizationMode"></a>

```go
func ResetAuthorizationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitEncryptionMode` <a name="ResetTransitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.resetTransitEncryptionMode"></a>

```go
func ResetTransitEncryptionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.GoogleRedisCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.GoogleRedisCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.GoogleRedisCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints">DiscoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs">PscConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections">PscConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput">AuthorizationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput">PscConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput">TransitEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DiscoveryEndpoints`<sup>Required</sup> <a name="DiscoveryEndpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.discoveryEndpoints"></a>

```go
func DiscoveryEndpoints() GoogleRedisClusterDiscoveryEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList">GoogleRedisClusterDiscoveryEndpointsList</a>

---

##### `PscConfigs`<sup>Required</sup> <a name="PscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigs"></a>

```go
func PscConfigs() GoogleRedisClusterPscConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList">GoogleRedisClusterPscConfigsList</a>

---

##### `PscConnections`<sup>Required</sup> <a name="PscConnections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConnections"></a>

```go
func PscConnections() GoogleRedisClusterPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList">GoogleRedisClusterPscConnectionsList</a>

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.stateInfo"></a>

```go
func StateInfo() GoogleRedisClusterStateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList">GoogleRedisClusterStateInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeouts"></a>

```go
func Timeouts() GoogleRedisClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference">GoogleRedisClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AuthorizationModeInput`<sup>Optional</sup> <a name="AuthorizationModeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationModeInput"></a>

```go
func AuthorizationModeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscConfigsInput`<sup>Optional</sup> <a name="PscConfigsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.pscConfigsInput"></a>

```go
func PscConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionModeInput`<sup>Optional</sup> <a name="TransitEncryptionModeInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionModeInput"></a>

```go
func TransitEncryptionModeInput() *string
```

- *Type:* *string

---

##### `AuthorizationMode`<sup>Required</sup> <a name="AuthorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.authorizationMode"></a>

```go
func AuthorizationMode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.transitEncryptionMode"></a>

```go
func TransitEncryptionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterConfig <a name="GoogleRedisClusterConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PscConfigs: interface{},
	ShardCount: *f64,
	AuthorizationMode: *string,
	Id: *string,
	Name: *string,
	Project: *string,
	Region: *string,
	ReplicaCount: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9.googleRedisCluster.GoogleRedisClusterTimeouts,
	TransitEncryptionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs">PscConfigs</a></code> | <code>interface{}</code> | psc_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | Required. Number of shards for the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode">AuthorizationMode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name">Name</a></code> | <code>*string</code> | Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region">Region</a></code> | <code>*string</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Optional. The number of replica nodes per shard. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PscConfigs`<sup>Required</sup> <a name="PscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.pscConfigs"></a>

```go
PscConfigs interface{}
```

- *Type:* interface{}

psc_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

Required. Number of shards for the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}

---

##### `AuthorizationMode`<sup>Optional</sup> <a name="AuthorizationMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.authorizationMode"></a>

```go
AuthorizationMode *string
```

- *Type:* *string

Optional.

The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name of the resource in this scope including project and location using the form: projects/{projectId}/locations/{locationId}/clusters/{clusterId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Optional. The number of replica nodes per shard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleRedisClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts">GoogleRedisClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}

---

##### `TransitEncryptionMode`<sup>Optional</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterConfig.property.transitEncryptionMode"></a>

```go
TransitEncryptionMode *string
```

- *Type:* *string

Optional.

The in-transit encryption for the Redis cluster.
If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}

---

### GoogleRedisClusterDiscoveryEndpoints <a name="GoogleRedisClusterDiscoveryEndpoints" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterDiscoveryEndpoints {

}
```


### GoogleRedisClusterDiscoveryEndpointsPscConfig <a name="GoogleRedisClusterDiscoveryEndpointsPscConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterDiscoveryEndpointsPscConfig {

}
```


### GoogleRedisClusterPscConfigs <a name="GoogleRedisClusterPscConfigs" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterPscConfigs {
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network">Network</a></code> | <code>*string</code> | Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigs.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required. The consumer network where the network address of the discovery endpoint will be reserved, in the form of projects/{network_project_id_or_number}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#network GoogleRedisCluster#network}

---

### GoogleRedisClusterPscConnections <a name="GoogleRedisClusterPscConnections" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterPscConnections {

}
```


### GoogleRedisClusterStateInfo <a name="GoogleRedisClusterStateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterStateInfo {

}
```


### GoogleRedisClusterStateInfoUpdateInfo <a name="GoogleRedisClusterStateInfoUpdateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterStateInfoUpdateInfo {

}
```


### GoogleRedisClusterTimeouts <a name="GoogleRedisClusterTimeouts" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

&googlerediscluster.GoogleRedisClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterDiscoveryEndpointsList <a name="GoogleRedisClusterDiscoveryEndpointsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterDiscoveryEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterDiscoveryEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterDiscoveryEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleRedisClusterDiscoveryEndpointsOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterDiscoveryEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterDiscoveryEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.pscConfig"></a>

```go
func PscConfig() GoogleRedisClusterDiscoveryEndpointsPscConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList">GoogleRedisClusterDiscoveryEndpointsPscConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRedisClusterDiscoveryEndpoints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpoints">GoogleRedisClusterDiscoveryEndpoints</a>

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigList <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterDiscoveryEndpointsPscConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterDiscoveryEndpointsPscConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference <a name="GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRedisClusterDiscoveryEndpointsPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterDiscoveryEndpointsPscConfig">GoogleRedisClusterDiscoveryEndpointsPscConfig</a>

---


### GoogleRedisClusterPscConfigsList <a name="GoogleRedisClusterPscConfigsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterPscConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterPscConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterPscConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleRedisClusterPscConfigsOutputReference <a name="GoogleRedisClusterPscConfigsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterPscConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterPscConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleRedisClusterPscConnectionsList <a name="GoogleRedisClusterPscConnectionsList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterPscConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterPscConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleRedisClusterPscConnectionsOutputReference <a name="GoogleRedisClusterPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterPscConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterPscConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRedisClusterPscConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterPscConnections">GoogleRedisClusterPscConnections</a>

---


### GoogleRedisClusterStateInfoList <a name="GoogleRedisClusterStateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterStateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterStateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterStateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleRedisClusterStateInfoOutputReference <a name="GoogleRedisClusterStateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterStateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterStateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo">UpdateInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateInfo`<sup>Required</sup> <a name="UpdateInfo" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.updateInfo"></a>

```go
func UpdateInfo() GoogleRedisClusterStateInfoUpdateInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList">GoogleRedisClusterStateInfoUpdateInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRedisClusterStateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfo">GoogleRedisClusterStateInfo</a>

---


### GoogleRedisClusterStateInfoUpdateInfoList <a name="GoogleRedisClusterStateInfoUpdateInfoList" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterStateInfoUpdateInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleRedisClusterStateInfoUpdateInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get"></a>

```go
func Get(index *f64) GoogleRedisClusterStateInfoUpdateInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleRedisClusterStateInfoUpdateInfoOutputReference <a name="GoogleRedisClusterStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterStateInfoUpdateInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleRedisClusterStateInfoUpdateInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount">TargetShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```go
func TargetReplicaCount() *f64
```

- *Type:* *f64

---

##### `TargetShardCount`<sup>Required</sup> <a name="TargetShardCount" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```go
func TargetShardCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleRedisClusterStateInfoUpdateInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterStateInfoUpdateInfo">GoogleRedisClusterStateInfoUpdateInfo</a>

---


### GoogleRedisClusterTimeoutsOutputReference <a name="GoogleRedisClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v9/googlerediscluster"

googlerediscluster.NewGoogleRedisClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleRedisClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleRedisCluster.GoogleRedisClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



