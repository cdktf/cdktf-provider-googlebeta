# `google_container_aws_node_pool`

Refer to the Terraform Registory for docs: [`google_container_aws_node_pool`](https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool).

# `googleContainerAwsNodePool` Submodule <a name="`googleContainerAwsNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAwsNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAwsNodePool <a name="GoogleContainerAwsNodePool" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool google_container_aws_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePool(Construct Scope, string Id, GoogleContainerAwsNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig">GoogleContainerAwsNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint">PutMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling"></a>

```csharp
private void PutAutoscaling(GoogleContainerAwsNodePoolAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig"></a>

```csharp
private void PutConfig(GoogleContainerAwsNodePoolConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `PutMaxPodsConstraint` <a name="PutMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint"></a>

```csharp
private void PutMaxPodsConstraint(GoogleContainerAwsNodePoolMaxPodsConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerAwsNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAwsNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAwsNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAwsNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput">MaxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscaling"></a>

```csharp
public GoogleContainerAwsNodePoolAutoscalingOutputReference Autoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference">GoogleContainerAwsNodePoolAutoscalingOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.config"></a>

```csharp
public GoogleContainerAwsNodePoolConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference">GoogleContainerAwsNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraint"></a>

```csharp
public GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference MaxPodsConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference">GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeouts"></a>

```csharp
public GoogleContainerAwsNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference">GoogleContainerAwsNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.autoscalingInput"></a>

```csharp
public GoogleContainerAwsNodePoolAutoscaling AutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.configInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxPodsConstraintInput`<sup>Optional</sup> <a name="MaxPodsConstraintInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.maxPodsConstraintInput"></a>

```csharp
public GoogleContainerAwsNodePoolMaxPodsConstraint MaxPodsConstraintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAwsNodePoolAutoscaling <a name="GoogleContainerAwsNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolAutoscaling {
    double MaxNodeCount,
    double MinNodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | Maximum number of nodes in the NodePool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#max_node_count GoogleContainerAwsNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#min_node_count GoogleContainerAwsNodePool#min_node_count}

---

### GoogleContainerAwsNodePoolConfig <a name="GoogleContainerAwsNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleContainerAwsNodePoolAutoscaling Autoscaling,
    string Cluster,
    GoogleContainerAwsNodePoolConfigA Config,
    string Location,
    GoogleContainerAwsNodePoolMaxPodsConstraint MaxPodsConstraint,
    string Name,
    string SubnetId,
    string Version,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Id = null,
    string Project = null,
    GoogleContainerAwsNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster">Cluster</a></code> | <code>string</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint">MaxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version">Version</a></code> | <code>string</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.autoscaling"></a>

```csharp
public GoogleContainerAwsNodePoolAutoscaling Autoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#autoscaling GoogleContainerAwsNodePool#autoscaling}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#cluster GoogleContainerAwsNodePool#cluster}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.config"></a>

```csharp
public GoogleContainerAwsNodePoolConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#config GoogleContainerAwsNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#location GoogleContainerAwsNodePool#location}

---

##### `MaxPodsConstraint`<sup>Required</sup> <a name="MaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.maxPodsConstraint"></a>

```csharp
public GoogleContainerAwsNodePoolMaxPodsConstraint MaxPodsConstraint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#max_pods_constraint GoogleContainerAwsNodePool#max_pods_constraint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#name GoogleContainerAwsNodePool#name}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#subnet_id GoogleContainerAwsNodePool#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#version GoogleContainerAwsNodePool#version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#annotations GoogleContainerAwsNodePool#annotations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#id GoogleContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#project GoogleContainerAwsNodePool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfig.property.timeouts"></a>

```csharp
public GoogleContainerAwsNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts">GoogleContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#timeouts GoogleContainerAwsNodePool#timeouts}

---

### GoogleContainerAwsNodePoolConfigA <a name="GoogleContainerAwsNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigA {
    GoogleContainerAwsNodePoolConfigConfigEncryption ConfigEncryption,
    string IamInstanceProfile,
    GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection AutoscalingMetricsCollection = null,
    string ImageType = null,
    GoogleContainerAwsNodePoolConfigInstancePlacement InstancePlacement = null,
    string InstanceType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleContainerAwsNodePoolConfigProxyConfig ProxyConfig = null,
    GoogleContainerAwsNodePoolConfigRootVolume RootVolume = null,
    string[] SecurityGroupIds = null,
    GoogleContainerAwsNodePoolConfigSpotConfig SpotConfig = null,
    GoogleContainerAwsNodePoolConfigSshConfig SshConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    object Taints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM role assigned to nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection">AutoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | autoscaling_metrics_collection block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType">ImageType</a></code> | <code>string</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement">InstancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | instance_placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType">InstanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig">SpotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | spot_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints">Taints</a></code> | <code>object</code> | taints block. |

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.configEncryption"></a>

```csharp
public GoogleContainerAwsNodePoolConfigConfigEncryption ConfigEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#config_encryption GoogleContainerAwsNodePool#config_encryption}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#iam_instance_profile GoogleContainerAwsNodePool#iam_instance_profile}

---

##### `AutoscalingMetricsCollection`<sup>Optional</sup> <a name="AutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection"></a>

```csharp
public GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection AutoscalingMetricsCollection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#autoscaling_metrics_collection GoogleContainerAwsNodePool#autoscaling_metrics_collection}

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#image_type GoogleContainerAwsNodePool#image_type}

---

##### `InstancePlacement`<sup>Optional</sup> <a name="InstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instancePlacement"></a>

```csharp
public GoogleContainerAwsNodePoolConfigInstancePlacement InstancePlacement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#instance_placement GoogleContainerAwsNodePool#instance_placement}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#instance_type GoogleContainerAwsNodePool#instance_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#labels GoogleContainerAwsNodePool#labels}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.proxyConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#proxy_config GoogleContainerAwsNodePool#proxy_config}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.rootVolume"></a>

```csharp
public GoogleContainerAwsNodePoolConfigRootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#root_volume GoogleContainerAwsNodePool#root_volume}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#security_group_ids GoogleContainerAwsNodePool#security_group_ids}

---

##### `SpotConfig`<sup>Optional</sup> <a name="SpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.spotConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSpotConfig SpotConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

spot_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#spot_config GoogleContainerAwsNodePool#spot_config}

---

##### `SshConfig`<sup>Optional</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.sshConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSshConfig SshConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#ssh_config GoogleContainerAwsNodePool#ssh_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#tags GoogleContainerAwsNodePool#tags}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#taints GoogleContainerAwsNodePool#taints}

---

### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection {
    string Granularity,
    string[] Metrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity">Granularity</a></code> | <code>string</code> | The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics">Metrics</a></code> | <code>string[]</code> | The metrics to enable. |

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#granularity GoogleContainerAwsNodePool#granularity}

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics"></a>

```csharp
public string[] Metrics { get; set; }
```

- *Type:* string[]

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#metrics GoogleContainerAwsNodePool#metrics}

---

### GoogleContainerAwsNodePoolConfigConfigEncryption <a name="GoogleContainerAwsNodePoolConfigConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigConfigEncryption {
    string KmsKeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt node pool configuration. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

### GoogleContainerAwsNodePoolConfigInstancePlacement <a name="GoogleContainerAwsNodePoolConfigInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigInstancePlacement {
    string Tenancy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy">Tenancy</a></code> | <code>string</code> | The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST. |

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#tenancy GoogleContainerAwsNodePool#tenancy}

---

### GoogleContainerAwsNodePoolConfigProxyConfig <a name="GoogleContainerAwsNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigProxyConfig {
    string SecretArn,
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#secret_arn GoogleContainerAwsNodePool#secret_arn}

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#secret_version GoogleContainerAwsNodePool#secret_version}

---

### GoogleContainerAwsNodePoolConfigRootVolume <a name="GoogleContainerAwsNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigRootVolume {
    double Iops = null,
    string KmsKeyArn = null,
    double SizeGib = null,
    double Throughput = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops">Iops</a></code> | <code>double</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput">Throughput</a></code> | <code>double</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#iops GoogleContainerAwsNodePool#iops}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#kms_key_arn GoogleContainerAwsNodePool#kms_key_arn}

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#size_gib GoogleContainerAwsNodePool#size_gib}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#throughput GoogleContainerAwsNodePool#throughput}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#volume_type GoogleContainerAwsNodePool#volume_type}

---

### GoogleContainerAwsNodePoolConfigSpotConfig <a name="GoogleContainerAwsNodePoolConfigSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigSpotConfig {
    string[] InstanceTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | List of AWS EC2 instance types for creating a spot node pool's nodes. |

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; set; }
```

- *Type:* string[]

List of AWS EC2 instance types for creating a spot node pool's nodes.

The specified instance types must have the same number of CPUs and memory. You can use the Amazon EC2 Instance Selector tool (https://github.com/aws/amazon-ec2-instance-selector) to choose instance types with matching CPU and memory

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#instance_types GoogleContainerAwsNodePool#instance_types}

---

### GoogleContainerAwsNodePoolConfigSshConfig <a name="GoogleContainerAwsNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigSshConfig {
    string Ec2KeyPair
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; set; }
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#ec2_key_pair GoogleContainerAwsNodePool#ec2_key_pair}

---

### GoogleContainerAwsNodePoolConfigTaints <a name="GoogleContainerAwsNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigTaints {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect">Effect</a></code> | <code>string</code> | The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key">Key</a></code> | <code>string</code> | Key for the taint. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value">Value</a></code> | <code>string</code> | Value for the taint. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#effect GoogleContainerAwsNodePool#effect}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#key GoogleContainerAwsNodePool#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#value GoogleContainerAwsNodePool#value}

---

### GoogleContainerAwsNodePoolMaxPodsConstraint <a name="GoogleContainerAwsNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolMaxPodsConstraint {
    double MaxPodsPerNode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | The maximum number of pods to schedule on a single node. |

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; set; }
```

- *Type:* double

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#max_pods_per_node GoogleContainerAwsNodePool#max_pods_per_node}

---

### GoogleContainerAwsNodePoolTimeouts <a name="GoogleContainerAwsNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#create GoogleContainerAwsNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#delete GoogleContainerAwsNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.77.0/docs/resources/google_container_aws_node_pool#update GoogleContainerAwsNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAwsNodePoolAutoscalingOutputReference <a name="GoogleContainerAwsNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscalingOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolAutoscaling">GoogleContainerAwsNodePoolAutoscaling</a>

---


### GoogleContainerAwsNodePoolConfigAOutputReference <a name="GoogleContainerAwsNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection">PutAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption">PutConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement">PutInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig">PutSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection">ResetAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement">ResetInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig">ResetSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig">ResetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingMetricsCollection` <a name="PutAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection"></a>

```csharp
private void PutAutoscalingMetricsCollection(GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `PutConfigEncryption` <a name="PutConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption"></a>

```csharp
private void PutConfigEncryption(GoogleContainerAwsNodePoolConfigConfigEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `PutInstancePlacement` <a name="PutInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement"></a>

```csharp
private void PutInstancePlacement(GoogleContainerAwsNodePoolConfigInstancePlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putInstancePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig"></a>

```csharp
private void PutProxyConfig(GoogleContainerAwsNodePoolConfigProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume"></a>

```csharp
private void PutRootVolume(GoogleContainerAwsNodePoolConfigRootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `PutSpotConfig` <a name="PutSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig"></a>

```csharp
private void PutSpotConfig(GoogleContainerAwsNodePoolConfigSpotConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSpotConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig"></a>

```csharp
private void PutSshConfig(GoogleContainerAwsNodePoolConfigSshConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoscalingMetricsCollection` <a name="ResetAutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection"></a>

```csharp
private void ResetAutoscalingMetricsCollection()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetInstancePlacement` <a name="ResetInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstancePlacement"></a>

```csharp
private void ResetInstancePlacement()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSpotConfig` <a name="ResetSpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSpotConfig"></a>

```csharp
private void ResetSpotConfig()
```

##### `ResetSshConfig` <a name="ResetSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetSshConfig"></a>

```csharp
private void ResetSshConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.resetTaints"></a>

```csharp
private void ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection">AutoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption">ConfigEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement">InstancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig">SpotConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput">AutoscalingMetricsCollectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput">ConfigEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput">InstancePlacementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput">SpotConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingMetricsCollection`<sup>Required</sup> <a name="AutoscalingMetricsCollection" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection"></a>

```csharp
public GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference AutoscalingMetricsCollection { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a>

---

##### `ConfigEncryption`<sup>Required</sup> <a name="ConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryption"></a>

```csharp
public GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference ConfigEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference">GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference</a>

---

##### `InstancePlacement`<sup>Required</sup> <a name="InstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacement"></a>

```csharp
public GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference InstancePlacement { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference">GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference">GoogleContainerAwsNodePoolConfigProxyConfigOutputReference</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolume"></a>

```csharp
public GoogleContainerAwsNodePoolConfigRootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference">GoogleContainerAwsNodePoolConfigRootVolumeOutputReference</a>

---

##### `SpotConfig`<sup>Required</sup> <a name="SpotConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSpotConfigOutputReference SpotConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference">GoogleContainerAwsNodePoolConfigSpotConfigOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfig"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSshConfigOutputReference SshConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference">GoogleContainerAwsNodePoolConfigSshConfigOutputReference</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taints"></a>

```csharp
public GoogleContainerAwsNodePoolConfigTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList">GoogleContainerAwsNodePoolConfigTaintsList</a>

---

##### `AutoscalingMetricsCollectionInput`<sup>Optional</sup> <a name="AutoscalingMetricsCollectionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection AutoscalingMetricsCollectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `ConfigEncryptionInput`<sup>Optional</sup> <a name="ConfigEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigConfigEncryption ConfigEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `InstancePlacementInput`<sup>Optional</sup> <a name="InstancePlacementInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instancePlacementInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigInstancePlacement InstancePlacementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigRootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SpotConfigInput`<sup>Optional</sup> <a name="SpotConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.spotConfigInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSpotConfig SpotConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSshConfig SshConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigA">GoogleContainerAwsNodePoolConfigA</a>

---


### GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference <a name="GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics">ResetMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics"></a>

```csharp
private void ResetMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput">MetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics">Metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput"></a>

```csharp
public string[] MetricsInput { get; }
```

- *Type:* string[]

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics"></a>

```csharp
public string[] Metrics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection">GoogleContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---


### GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference <a name="GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigConfigEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigConfigEncryption">GoogleContainerAwsNodePoolConfigConfigEncryption</a>

---


### GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference <a name="GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.resetTenancy"></a>

```csharp
private void ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacementOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigInstancePlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigInstancePlacement">GoogleContainerAwsNodePoolConfigInstancePlacement</a>

---


### GoogleContainerAwsNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigProxyConfig">GoogleContainerAwsNodePoolConfigProxyConfig</a>

---


### GoogleContainerAwsNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAwsNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigRootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigRootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigRootVolume">GoogleContainerAwsNodePoolConfigRootVolume</a>

---


### GoogleContainerAwsNodePoolConfigSpotConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSpotConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigSpotConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypesInput"></a>

```csharp
public string[] InstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSpotConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSpotConfig">GoogleContainerAwsNodePoolConfigSpotConfig</a>

---


### GoogleContainerAwsNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAwsNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigSshConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput"></a>

```csharp
public string Ec2KeyPairInput { get; }
```

- *Type:* string

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolConfigSshConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigSshConfig">GoogleContainerAwsNodePoolConfigSshConfig</a>

---


### GoogleContainerAwsNodePoolConfigTaintsList <a name="GoogleContainerAwsNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get"></a>

```csharp
private GoogleContainerAwsNodePoolConfigTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAwsNodePoolConfigTaintsOutputReference <a name="GoogleContainerAwsNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolConfigTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```csharp
public double MaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAwsNodePoolMaxPodsConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolMaxPodsConstraint">GoogleContainerAwsNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAwsNodePoolTimeoutsOutputReference <a name="GoogleContainerAwsNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAwsNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAwsNodePool.GoogleContainerAwsNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



