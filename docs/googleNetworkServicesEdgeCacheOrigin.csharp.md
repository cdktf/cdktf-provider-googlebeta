# `googleNetworkServicesEdgeCacheOrigin` Submodule <a name="`googleNetworkServicesEdgeCacheOrigin` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheOrigin <a name="GoogleNetworkServicesEdgeCacheOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin google_network_services_edge_cache_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOrigin(Construct Scope, string Id, GoogleNetworkServicesEdgeCacheOriginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig">GoogleNetworkServicesEdgeCacheOriginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig">GoogleNetworkServicesEdgeCacheOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication">PutAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction">PutOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect">PutOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetAwsV4Authentication">ResetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetFailoverOrigin">ResetFailoverOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginOverrideAction">ResetOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginRedirect">ResetOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsV4Authentication` <a name="PutAwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication"></a>

```csharp
private void PutAwsV4Authentication(GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `PutOriginOverrideAction` <a name="PutOriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction"></a>

```csharp
private void PutOriginOverrideAction(GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `PutOriginRedirect` <a name="PutOriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect"></a>

```csharp
private void PutOriginRedirect(GoogleNetworkServicesEdgeCacheOriginOriginRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putOriginRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout"></a>

```csharp
private void PutTimeout(GoogleNetworkServicesEdgeCacheOriginTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesEdgeCacheOriginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>

---

##### `ResetAwsV4Authentication` <a name="ResetAwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetAwsV4Authentication"></a>

```csharp
private void ResetAwsV4Authentication()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFailoverOrigin` <a name="ResetFailoverOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetFailoverOrigin"></a>

```csharp
private void ResetFailoverOrigin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```

##### `ResetOriginOverrideAction` <a name="ResetOriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginOverrideAction"></a>

```csharp
private void ResetOriginOverrideAction()
```

##### `ResetOriginRedirect` <a name="ResetOriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetOriginRedirect"></a>

```csharp
private void ResetOriginRedirect()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetRetryConditions"></a>

```csharp
private void ResetRetryConditions()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheOrigin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheOrigin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheOrigin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheOrigin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheOrigin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheOrigin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesEdgeCacheOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput">AwsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOriginInput">FailoverOriginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddressInput">OriginAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideActionInput">OriginOverrideActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirectInput">OriginRedirectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOrigin">FailoverOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddress">OriginAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4Authentication"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference AwsV4Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference">GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OriginOverrideAction`<sup>Required</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideAction"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference OriginOverrideAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference</a>

---

##### `OriginRedirect`<sup>Required</sup> <a name="OriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirect"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference OriginRedirect { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeout"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference</a>

---

##### `AwsV4AuthenticationInput`<sup>Optional</sup> <a name="AwsV4AuthenticationInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.awsV4AuthenticationInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FailoverOriginInput`<sup>Optional</sup> <a name="FailoverOriginInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOriginInput"></a>

```csharp
public string FailoverOriginInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginAddressInput`<sup>Optional</sup> <a name="OriginAddressInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddressInput"></a>

```csharp
public string OriginAddressInput { get; }
```

- *Type:* string

---

##### `OriginOverrideActionInput`<sup>Optional</sup> <a name="OriginOverrideActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originOverrideActionInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---

##### `OriginRedirectInput`<sup>Optional</sup> <a name="OriginRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originRedirectInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginRedirect OriginRedirectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditionsInput"></a>

```csharp
public string[] RetryConditionsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FailoverOrigin`<sup>Required</sup> <a name="FailoverOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.failoverOrigin"></a>

```csharp
public string FailoverOrigin { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.originAddress"></a>

```csharp
public string OriginAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOrigin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication <a name="GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication {
    string AccessKeyId,
    string OriginRegion,
    string SecretAccessKeyVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | The access key ID your origin uses to identify the key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion">OriginRegion</a></code> | <code>string</code> | The name of the AWS region that your origin is in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>string</code> | The Secret Manager secret version of the secret access key used by your origin. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

The access key ID your origin uses to identify the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#access_key_id GoogleNetworkServicesEdgeCacheOrigin#access_key_id}

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.originRegion"></a>

```csharp
public string OriginRegion { get; set; }
```

- *Type:* string

The name of the AWS region that your origin is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#origin_region GoogleNetworkServicesEdgeCacheOrigin#origin_region}

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication.property.secretAccessKeyVersion"></a>

```csharp
public string SecretAccessKeyVersion { get; set; }
```

- *Type:* string

The Secret Manager secret version of the secret access key used by your origin.

This is the resource name of the secret version in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the project, secret, and version you require.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#secret_access_key_version GoogleNetworkServicesEdgeCacheOrigin#secret_access_key_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkServicesEdgeCacheOriginConfig <a name="GoogleNetworkServicesEdgeCacheOriginConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string OriginAddress,
    GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4Authentication = null,
    string Description = null,
    string FailoverOrigin = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxAttempts = null,
    GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideAction = null,
    GoogleNetworkServicesEdgeCacheOriginOriginRedirect OriginRedirect = null,
    double Port = null,
    string Project = null,
    string Protocol = null,
    string[] RetryConditions = null,
    GoogleNetworkServicesEdgeCacheOriginTimeout Timeout = null,
    GoogleNetworkServicesEdgeCacheOriginTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originAddress">OriginAddress</a></code> | <code>string</code> | A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.failoverOrigin">FailoverOrigin</a></code> | <code>string</code> | The Origin resource to try when the current origin cannot be reached. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | The maximum number of attempts to cache fill from this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originOverrideAction">OriginOverrideAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | origin_override_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originRedirect">OriginRedirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | origin_redirect block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.port">Port</a></code> | <code>double</code> | The port to connect to the origin on. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.protocol">Protocol</a></code> | <code>string</code> | The protocol to use to connect to the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.retryConditions">RetryConditions</a></code> | <code>string[]</code> | Specifies one or more retry conditions for the configured origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#name GoogleNetworkServicesEdgeCacheOrigin#name}

---

##### `OriginAddress`<sup>Required</sup> <a name="OriginAddress" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originAddress"></a>

```csharp
public string OriginAddress { get; set; }
```

- *Type:* string

A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.

This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname

When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#origin_address GoogleNetworkServicesEdgeCacheOrigin#origin_address}

---

##### `AwsV4Authentication`<sup>Optional</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.awsV4Authentication"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication AwsV4Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#aws_v4_authentication GoogleNetworkServicesEdgeCacheOrigin#aws_v4_authentication}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#description GoogleNetworkServicesEdgeCacheOrigin#description}

---

##### `FailoverOrigin`<sup>Optional</sup> <a name="FailoverOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.failoverOrigin"></a>

```csharp
public string FailoverOrigin { get; set; }
```

- *Type:* string

The Origin resource to try when the current origin cannot be reached.

After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.

The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#failover_origin GoogleNetworkServicesEdgeCacheOrigin#failover_origin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#labels GoogleNetworkServicesEdgeCacheOrigin#labels}

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

The maximum number of attempts to cache fill from this origin.

Another attempt is made when a cache fill fails with one of the retryConditions.

Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.

The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.

The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.

Defaults to 1. Must be a value greater than 0 and less than 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#max_attempts GoogleNetworkServicesEdgeCacheOrigin#max_attempts}

---

##### `OriginOverrideAction`<sup>Optional</sup> <a name="OriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originOverrideAction"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction OriginOverrideAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

origin_override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#origin_override_action GoogleNetworkServicesEdgeCacheOrigin#origin_override_action}

---

##### `OriginRedirect`<sup>Optional</sup> <a name="OriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.originRedirect"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginRedirect OriginRedirect { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

origin_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#origin_redirect GoogleNetworkServicesEdgeCacheOrigin#origin_redirect}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port to connect to the origin on.

Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#port GoogleNetworkServicesEdgeCacheOrigin#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol to use to connect to the configured origin.

Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.

When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#protocol GoogleNetworkServicesEdgeCacheOrigin#protocol}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.retryConditions"></a>

```csharp
public string[] RetryConditions { get; set; }
```

- *Type:* string[]

Specifies one or more retry conditions for the configured origin.

If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.

The default retryCondition is "CONNECT_FAILURE".

retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.

Valid values are:

* CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
* HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
* GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
* RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
* NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
* FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#retry_conditions GoogleNetworkServicesEdgeCacheOrigin#retry_conditions}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeout"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#timeout GoogleNetworkServicesEdgeCacheOrigin#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts">GoogleNetworkServicesEdgeCacheOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#timeouts GoogleNetworkServicesEdgeCacheOrigin#timeouts}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction {
    GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderAction = null,
    GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.headerAction"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#header_action GoogleNetworkServicesEdgeCacheOrigin#header_action}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction.property.urlRewrite"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewrite { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#url_rewrite GoogleNetworkServicesEdgeCacheOrigin#url_rewrite}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction {
    object RequestHeadersToAdd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code>object</code> | request_headers_to_add block. |

---

##### `RequestHeadersToAdd`<sup>Optional</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction.property.requestHeadersToAdd"></a>

```csharp
public object RequestHeadersToAdd { get; set; }
```

- *Type:* object

request_headers_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#request_headers_to_add GoogleNetworkServicesEdgeCacheOrigin#request_headers_to_add}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
    string HeaderName,
    string HeaderValue,
    object Replace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName">HeaderName</a></code> | <code>string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue">HeaderValue</a></code> | <code>string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace">Replace</a></code> | <code>object</code> | Whether to replace all existing headers with the same name. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#header_name GoogleNetworkServicesEdgeCacheOrigin#header_name}

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.headerValue"></a>

```csharp
public string HeaderValue { get; set; }
```

- *Type:* string

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#header_value GoogleNetworkServicesEdgeCacheOrigin#header_value}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd.property.replace"></a>

```csharp
public object Replace { get; set; }
```

- *Type:* object

Whether to replace all existing headers with the same name.

By default, added header values are appended
to the response or request headers with the
same field names. The added values are
separated by commas.

To overwrite existing values, set 'replace' to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#replace GoogleNetworkServicesEdgeCacheOrigin#replace}

---

### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite {
    string HostRewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite">HostRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite. |

---

##### `HostRewrite`<sup>Optional</sup> <a name="HostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite.property.hostRewrite"></a>

```csharp
public string HostRewrite { get; set; }
```

- *Type:* string

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of the hostRewrite.

This value must be between 1 and 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#host_rewrite GoogleNetworkServicesEdgeCacheOrigin#host_rewrite}

---

### GoogleNetworkServicesEdgeCacheOriginOriginRedirect <a name="GoogleNetworkServicesEdgeCacheOriginOriginRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginRedirect {
    string[] RedirectConditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions">RedirectConditions</a></code> | <code>string[]</code> | The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted. |

---

##### `RedirectConditions`<sup>Optional</sup> <a name="RedirectConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect.property.redirectConditions"></a>

```csharp
public string[] RedirectConditions { get; set; }
```

- *Type:* string[]

The set of redirect response codes that the CDN follows. Values of [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions) are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#redirect_conditions GoogleNetworkServicesEdgeCacheOrigin#redirect_conditions}

---

### GoogleNetworkServicesEdgeCacheOriginTimeout <a name="GoogleNetworkServicesEdgeCacheOriginTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginTimeout {
    string ConnectTimeout = null,
    string MaxAttemptsTimeout = null,
    string ReadTimeout = null,
    string ResponseTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>string</code> | The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.readTimeout">ReadTimeout</a></code> | <code>string</code> | The maximum duration to wait between reads of a single HTTP connection/stream. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.responseTimeout">ResponseTimeout</a></code> | <code>string</code> | The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.

Defaults to 5 seconds. The timeout must be a value between 1s and 15s.

The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#connect_timeout GoogleNetworkServicesEdgeCacheOrigin#connect_timeout}

---

##### `MaxAttemptsTimeout`<sup>Optional</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.maxAttemptsTimeout"></a>

```csharp
public string MaxAttemptsTimeout { get; set; }
```

- *Type:* string

The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client.

A HTTP 504 will be returned if the timeout is reached before a response is returned.

Defaults to 15 seconds. The timeout must be a value between 1s and 30s.

If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#max_attempts_timeout GoogleNetworkServicesEdgeCacheOrigin#max_attempts_timeout}

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.readTimeout"></a>

```csharp
public string ReadTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait between reads of a single HTTP connection/stream.

Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.

The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#read_timeout GoogleNetworkServicesEdgeCacheOrigin#read_timeout}

---

##### `ResponseTimeout`<sup>Optional</sup> <a name="ResponseTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout.property.responseTimeout"></a>

```csharp
public string ResponseTimeout { get; set; }
```

- *Type:* string

The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.

Defaults to 30 seconds. The timeout must be a value between 1s and 120s.

The responseTimeout starts after the connection has been established.

This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.

If the response headers have already been written to the connection, the response will be truncated and logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#response_timeout GoogleNetworkServicesEdgeCacheOrigin#response_timeout}

---

### GoogleNetworkServicesEdgeCacheOriginTimeouts <a name="GoogleNetworkServicesEdgeCacheOriginTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput">OriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput">SecretAccessKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion">SecretAccessKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `OriginRegionInput`<sup>Optional</sup> <a name="OriginRegionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```csharp
public string OriginRegionInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyVersionInput`<sup>Optional</sup> <a name="SecretAccessKeyVersionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersionInput"></a>

```csharp
public string SecretAccessKeyVersionInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.originRegion"></a>

```csharp
public string OriginRegion { get; }
```

- *Type:* string

---

##### `SecretAccessKeyVersion`<sup>Required</sup> <a name="SecretAccessKeyVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.secretAccessKeyVersion"></a>

```csharp
public string SecretAccessKeyVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication">GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd">PutRequestHeadersToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd">ResetRequestHeadersToAdd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdd` <a name="PutRequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd"></a>

```csharp
private void PutRequestHeadersToAdd(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.putRequestHeadersToAdd.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestHeadersToAdd` <a name="ResetRequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.resetRequestHeadersToAdd"></a>

```csharp
private void ResetRequestHeadersToAdd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd">RequestHeadersToAdd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput">RequestHeadersToAddInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeadersToAdd`<sup>Required</sup> <a name="RequestHeadersToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAdd"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList RequestHeadersToAdd { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList</a>

---

##### `RequestHeadersToAddInput`<sup>Optional</sup> <a name="RequestHeadersToAddInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.requestHeadersToAddInput"></a>

```csharp
public object RequestHeadersToAddInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get"></a>

```csharp
private GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace">ResetReplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.resetReplace"></a>

```csharp
private void ResetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput">ReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace">Replace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValueInput"></a>

```csharp
public string HeaderValueInput { get; }
```

- *Type:* string

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replaceInput"></a>

```csharp
public object ReplaceInput { get; }
```

- *Type:* object

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.replace"></a>

```csharp
public object Replace { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction"></a>

```csharp
private void PutHeaderAction(GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite"></a>

```csharp
private void PutUrlRewrite(GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetHeaderAction"></a>

```csharp
private void ResetHeaderAction()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.resetUrlRewrite"></a>

```csharp
private void ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerAction"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference HeaderAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewrite"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference UrlRewrite { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference</a>

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.headerActionInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction HeaderActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.urlRewriteInput"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite UrlRewriteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction">GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite">ResetHostRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostRewrite` <a name="ResetHostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.resetHostRewrite"></a>

```csharp
private void ResetHostRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput">HostRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite">HostRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostRewriteInput`<sup>Optional</sup> <a name="HostRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```csharp
public string HostRewriteInput { get; }
```

- *Type:* string

---

##### `HostRewrite`<sup>Required</sup> <a name="HostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.hostRewrite"></a>

```csharp
public string HostRewrite { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite">GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite</a>

---


### GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions">ResetRedirectConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectConditions` <a name="ResetRedirectConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.resetRedirectConditions"></a>

```csharp
private void ResetRedirectConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput">RedirectConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions">RedirectConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectConditionsInput`<sup>Optional</sup> <a name="RedirectConditionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditionsInput"></a>

```csharp
public string[] RedirectConditionsInput { get; }
```

- *Type:* string[]

---

##### `RedirectConditions`<sup>Required</sup> <a name="RedirectConditions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.redirectConditions"></a>

```csharp
public string[] RedirectConditions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginOriginRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginOriginRedirect">GoogleNetworkServicesEdgeCacheOriginOriginRedirect</a>

---


### GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout">ResetMaxAttemptsTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout">ResetResponseTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetMaxAttemptsTimeout` <a name="ResetMaxAttemptsTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetMaxAttemptsTimeout"></a>

```csharp
private void ResetMaxAttemptsTimeout()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetReadTimeout"></a>

```csharp
private void ResetReadTimeout()
```

##### `ResetResponseTimeout` <a name="ResetResponseTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.resetResponseTimeout"></a>

```csharp
private void ResetResponseTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput">MaxAttemptsTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput">ResponseTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout">MaxAttemptsTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout">ReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout">ResponseTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeoutInput"></a>

```csharp
public string ConnectTimeoutInput { get; }
```

- *Type:* string

---

##### `MaxAttemptsTimeoutInput`<sup>Optional</sup> <a name="MaxAttemptsTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeoutInput"></a>

```csharp
public string MaxAttemptsTimeoutInput { get; }
```

- *Type:* string

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeoutInput"></a>

```csharp
public string ReadTimeoutInput { get; }
```

- *Type:* string

---

##### `ResponseTimeoutInput`<sup>Optional</sup> <a name="ResponseTimeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeoutInput"></a>

```csharp
public string ResponseTimeoutInput { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; }
```

- *Type:* string

---

##### `MaxAttemptsTimeout`<sup>Required</sup> <a name="MaxAttemptsTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.maxAttemptsTimeout"></a>

```csharp
public string MaxAttemptsTimeout { get; }
```

- *Type:* string

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.readTimeout"></a>

```csharp
public string ReadTimeout { get; }
```

- *Type:* string

---

##### `ResponseTimeout`<sup>Required</sup> <a name="ResponseTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.responseTimeout"></a>

```csharp
public string ResponseTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEdgeCacheOriginTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeout">GoogleNetworkServicesEdgeCacheOriginTimeout</a>

---


### GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheOrigin.GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



