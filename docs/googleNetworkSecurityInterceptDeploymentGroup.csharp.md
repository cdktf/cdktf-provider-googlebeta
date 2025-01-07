# `googleNetworkSecurityInterceptDeploymentGroup` Submodule <a name="`googleNetworkSecurityInterceptDeploymentGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptDeploymentGroup <a name="GoogleNetworkSecurityInterceptDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group google_network_security_intercept_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroup(Construct Scope, string Id, GoogleNetworkSecurityInterceptDeploymentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig">GoogleNetworkSecurityInterceptDeploymentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig">GoogleNetworkSecurityInterceptDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityInterceptDeploymentGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityInterceptDeploymentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityInterceptDeploymentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityInterceptDeploymentGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityInterceptDeploymentGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityInterceptDeploymentGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityInterceptDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups">ConnectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput">InterceptDeploymentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectedEndpointGroups`<sup>Required</sup> <a name="ConnectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups"></a>

```csharp
public GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList ConnectedEndpointGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterceptDeploymentGroupIdInput`<sup>Optional</sup> <a name="InterceptDeploymentGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput"></a>

```csharp
public string InterceptDeploymentGroupIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId"></a>

```csharp
public string InterceptDeploymentGroupId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptDeploymentGroupConfig <a name="GoogleNetworkSecurityInterceptDeploymentGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InterceptDeploymentGroupId,
    string Location,
    string Network,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkSecurityInterceptDeploymentGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and intercept_deployment_group_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.network">Network</a></code> | <code>string</code> | Required. Immutable. The network that is being used for the deployment. Format is: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#id GoogleNetworkSecurityInterceptDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#project GoogleNetworkSecurityInterceptDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId"></a>

```csharp
public string InterceptDeploymentGroupId { get; set; }
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and intercept_deployment_group_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#intercept_deployment_group_id GoogleNetworkSecurityInterceptDeploymentGroup#intercept_deployment_group_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/InterceptDeploymentGroup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#location GoogleNetworkSecurityInterceptDeploymentGroup#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Required. Immutable. The network that is being used for the deployment. Format is: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#network GoogleNetworkSecurityInterceptDeploymentGroup#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#id GoogleNetworkSecurityInterceptDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#labels GoogleNetworkSecurityInterceptDeploymentGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#project GoogleNetworkSecurityInterceptDeploymentGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityInterceptDeploymentGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#timeouts GoogleNetworkSecurityInterceptDeploymentGroup#timeouts}

---

### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups {

};
```


### GoogleNetworkSecurityInterceptDeploymentGroupTimeouts <a name="GoogleNetworkSecurityInterceptDeploymentGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#create GoogleNetworkSecurityInterceptDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#delete GoogleNetworkSecurityInterceptDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#update GoogleNetworkSecurityInterceptDeploymentGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#create GoogleNetworkSecurityInterceptDeploymentGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#delete GoogleNetworkSecurityInterceptDeploymentGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#update GoogleNetworkSecurityInterceptDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get"></a>

```csharp
private GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a>

---


### GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



