# `google_api_gateway_api_config_iam_policy`

Refer to the Terraform Registory for docs: [`google_api_gateway_api_config_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy).

# `googleApiGatewayApiConfigIamPolicy` Submodule <a name="`googleApiGatewayApiConfigIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigIamPolicy <a name="GoogleApiGatewayApiConfigIamPolicy" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy google_api_gateway_api_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleapigatewayapiconfigiampolicy"

googleapigatewayapiconfigiampolicy.NewGoogleApiGatewayApiConfigIamPolicy(scope Construct, id *string, config GoogleApiGatewayApiConfigIamPolicyConfig) GoogleApiGatewayApiConfigIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig">GoogleApiGatewayApiConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig">GoogleApiGatewayApiConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleapigatewayapiconfigiampolicy"

googleapigatewayapiconfigiampolicy.GoogleApiGatewayApiConfigIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleapigatewayapiconfigiampolicy"

googleapigatewayapiconfigiampolicy.GoogleApiGatewayApiConfigIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleapigatewayapiconfigiampolicy"

googleapigatewayapiconfigiampolicy.GoogleApiGatewayApiConfigIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput">ApiConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiConfig">ApiConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ApiConfigInput`<sup>Optional</sup> <a name="ApiConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput"></a>

```go
func ApiConfigInput() *string
```

- *Type:* *string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.apiConfig"></a>

```go
func ApiConfig() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigIamPolicyConfig <a name="GoogleApiGatewayApiConfigIamPolicyConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googleapigatewayapiconfigiampolicy"

&googleapigatewayapiconfigiampolicy.GoogleApiGatewayApiConfigIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	ApiConfig: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.api">Api</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#api GoogleApiGatewayApiConfigIamPolicy#api}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig">ApiConfig</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#api_config GoogleApiGatewayApiConfigIamPolicy#api_config}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#policy_data GoogleApiGatewayApiConfigIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#id GoogleApiGatewayApiConfigIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#project GoogleApiGatewayApiConfigIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#api GoogleApiGatewayApiConfigIamPolicy#api}.

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig"></a>

```go
ApiConfig *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#api_config GoogleApiGatewayApiConfigIamPolicy#api_config}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#policy_data GoogleApiGatewayApiConfigIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#id GoogleApiGatewayApiConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfigIamPolicy.GoogleApiGatewayApiConfigIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_api_gateway_api_config_iam_policy#project GoogleApiGatewayApiConfigIamPolicy#project}.

---



