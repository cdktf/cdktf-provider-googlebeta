# `googleNetworkConnectivityServiceConnectionPolicy` Submodule <a name="`googleNetworkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicy <a name="GoogleNetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicy(Construct Scope, string Id, GoogleNetworkConnectivityServiceConnectionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig">GoogleNetworkConnectivityServiceConnectionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig">GoogleNetworkConnectivityServiceConnectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```csharp
private void PutPscConfig(GoogleNetworkConnectivityServiceConnectionPolicyPscConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkConnectivityServiceConnectionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```csharp
private void ResetPscConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityServiceConnectionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityServiceConnectionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityServiceConnectionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityServiceConnectionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityServiceConnectionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityServiceConnectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityServiceConnectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure">Infrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections">PscConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">ServiceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass">ServiceClass</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Infrastructure`<sup>Required</sup> <a name="Infrastructure" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```csharp
public string Infrastructure { get; }
```

- *Type:* string

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference PscConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `PscConnections`<sup>Required</sup> <a name="PscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList PscConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig PscConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `ServiceClassInput`<sup>Optional</sup> <a name="ServiceClassInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```csharp
public string ServiceClassInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceClass`<sup>Required</sup> <a name="ServiceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```csharp
public string ServiceClass { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Network,
    string ServiceClass,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkConnectivityServiceConnectionPolicyPscConfig PscConfig = null,
    GoogleNetworkConnectivityServiceConnectionPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network">Network</a></code> | <code>string</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">ServiceClass</a></code> | <code>string</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description">Description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `ServiceClass`<sup>Required</sup> <a name="ServiceClass" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```csharp
public string ServiceClass { get; set; }
```

- *Type:* string

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig PscConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConfig {
    string[] Subnetworks,
    string Limit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">Subnetworks</a></code> | <code>string[]</code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">Limit</a></code> | <code>string</code> | Max number of PSC connections for this policy. |

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```csharp
public string[] Subnetworks { get; set; }
```

- *Type:* string[]

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#subnetworks GoogleNetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```csharp
public string Limit { get; set; }
```

- *Type:* string

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#limit GoogleNetworkConnectivityServiceConnectionPolicy#limit}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConnections <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnections {

};
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError {

};
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo {

};
```


### GoogleNetworkConnectivityServiceConnectionPolicyTimeouts <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">LimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">SubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">Limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">Subnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```csharp
public string LimitInput { get; }
```

- *Type:* string

---

##### `SubnetworksInput`<sup>Optional</sup> <a name="SubnetworksInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```csharp
public string[] SubnetworksInput { get; }
```

- *Type:* string[]

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```csharp
public string Limit { get; }
```

- *Type:* string

---

##### `Subnetworks`<sup>Required</sup> <a name="Subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```csharp
public string[] Subnetworks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get"></a>

```csharp
private GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get"></a>

```csharp
private GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get"></a>

```csharp
private GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress">ConsumerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule">ConsumerForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject">ConsumerTargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType">ErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation">GceOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerAddress`<sup>Required</sup> <a name="ConsumerAddress" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress"></a>

```csharp
public string ConsumerAddress { get; }
```

- *Type:* string

---

##### `ConsumerForwardingRule`<sup>Required</sup> <a name="ConsumerForwardingRule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule"></a>

```csharp
public string ConsumerForwardingRule { get; }
```

- *Type:* string

---

##### `ConsumerTargetProject`<sup>Required</sup> <a name="ConsumerTargetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject"></a>

```csharp
public string ConsumerTargetProject { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a>

---

##### `ErrorType`<sup>Required</sup> <a name="ErrorType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType"></a>

```csharp
public string ErrorType { get; }
```

- *Type:* string

---

##### `GceOperation`<sup>Required</sup> <a name="GceOperation" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation"></a>

```csharp
public string GceOperation { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityServiceConnectionPolicyPscConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



