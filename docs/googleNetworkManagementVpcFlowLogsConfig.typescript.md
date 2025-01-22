# `googleNetworkManagementVpcFlowLogsConfig` Submodule <a name="`googleNetworkManagementVpcFlowLogsConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementVpcFlowLogsConfig <a name="GoogleNetworkManagementVpcFlowLogsConfig" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config google_network_management_vpc_flow_logs_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

new googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig(scope: Construct, id: string, config: GoogleNetworkManagementVpcFlowLogsConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig">GoogleNetworkManagementVpcFlowLogsConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig">GoogleNetworkManagementVpcFlowLogsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetVpnTunnel">resetVpnTunnel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkManagementVpcFlowLogsConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetAggregationInterval"></a>

```typescript
public resetAggregationInterval(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFilterExpr"></a>

```typescript
public resetFilterExpr(): void
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetFlowSampling"></a>

```typescript
public resetFlowSampling(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetInterconnectAttachment"></a>

```typescript
public resetInterconnectAttachment(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetMetadataFields"></a>

```typescript
public resetMetadataFields(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnTunnel` <a name="resetVpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.resetVpnTunnel"></a>

```typescript
public resetVpnTunnel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkManagementVpcFlowLogsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkManagementVpcFlowLogsConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkManagementVpcFlowLogsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementVpcFlowLogsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExprInput">filterExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSamplingInput">flowSamplingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput">vpcFlowLogsConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput">vpnTunnelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference">GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationIntervalInput"></a>

```typescript
public readonly aggregationIntervalInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExprInput"></a>

```typescript
public readonly filterExprInput: string;
```

- *Type:* string

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSamplingInput"></a>

```typescript
public readonly flowSamplingInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachmentInput"></a>

```typescript
public readonly interconnectAttachmentInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFieldsInput"></a>

```typescript
public readonly metadataFieldsInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---

##### `vpcFlowLogsConfigIdInput`<sup>Optional</sup> <a name="vpcFlowLogsConfigIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigIdInput"></a>

```typescript
public readonly vpcFlowLogsConfigIdInput: string;
```

- *Type:* string

---

##### `vpnTunnelInput`<sup>Optional</sup> <a name="vpnTunnelInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnelInput"></a>

```typescript
public readonly vpnTunnelInput: string;
```

- *Type:* string

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

---

##### `vpnTunnel`<sup>Required</sup> <a name="vpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementVpcFlowLogsConfigConfig <a name="GoogleNetworkManagementVpcFlowLogsConfigConfig" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.Initializer"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

const googleNetworkManagementVpcFlowLogsConfigConfig: googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId">vpcFlowLogsConfigId</a></code> | <code>string</code> | Required. ID of the 'VpcFlowLogsConfig'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.description">description</a></code> | <code>string</code> | Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.filterExpr">filterExpr</a></code> | <code>string</code> | Optional. Export filter used to define which VPC Flow Logs should be logged. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.flowSampling">flowSampling</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>string</code> | Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadata">metadata</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadataFields">metadataFields</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.state">state</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>string</code> | Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource
within its parent collection as described in https://google.aip.dev/122. See documentation
for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#location GoogleNetworkManagementVpcFlowLogsConfig#location}

---

##### `vpcFlowLogsConfigId`<sup>Required</sup> <a name="vpcFlowLogsConfigId" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpcFlowLogsConfigId"></a>

```typescript
public readonly vpcFlowLogsConfigId: string;
```

- *Type:* string

Required. ID of the 'VpcFlowLogsConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#vpc_flow_logs_config_id GoogleNetworkManagementVpcFlowLogsConfig#vpc_flow_logs_config_id}

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.aggregationInterval"></a>

```typescript
public readonly aggregationInterval: string;
```

- *Type:* string

Optional.

The aggregation interval for the logs. Default value is
INTERVAL_5_SEC.   Possible values:  AGGREGATION_INTERVAL_UNSPECIFIED INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#aggregation_interval GoogleNetworkManagementVpcFlowLogsConfig#aggregation_interval}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#description GoogleNetworkManagementVpcFlowLogsConfig#description}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.filterExpr"></a>

```typescript
public readonly filterExpr: string;
```

- *Type:* string

Optional. Export filter used to define which VPC Flow Logs should be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#filter_expr GoogleNetworkManagementVpcFlowLogsConfig#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.flowSampling"></a>

```typescript
public readonly flowSampling: number;
```

- *Type:* number

Optional.

The value of the field must be in (0, 1]. The sampling rate
of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
the state field instead. Default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#flow_sampling GoogleNetworkManagementVpcFlowLogsConfig#flow_sampling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#id GoogleNetworkManagementVpcFlowLogsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.interconnectAttachment"></a>

```typescript
public readonly interconnectAttachment: string;
```

- *Type:* string

Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id}/regions/{region}/interconnectAttachments/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#interconnect_attachment GoogleNetworkManagementVpcFlowLogsConfig#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#labels GoogleNetworkManagementVpcFlowLogsConfig#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Optional.

Configures whether all, none or a subset of metadata fields
should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
  Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata GoogleNetworkManagementVpcFlowLogsConfig#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.metadataFields"></a>

```typescript
public readonly metadataFields: string[];
```

- *Type:* string[]

Optional.

Custom metadata fields to include in the reported VPC flow
logs. Can only be specified if \"metadata\" was set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#metadata_fields GoogleNetworkManagementVpcFlowLogsConfig#metadata_fields}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#project GoogleNetworkManagementVpcFlowLogsConfig#project}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Optional.

The state of the VPC Flow Log configuration. Default value
is ENABLED. When creating a new configuration, it must be enabled.   Possible

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#state GoogleNetworkManagementVpcFlowLogsConfig#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#timeouts GoogleNetworkManagementVpcFlowLogsConfig#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigConfig.property.vpnTunnel"></a>

```typescript
public readonly vpnTunnel: string;
```

- *Type:* string

Traffic will be logged from the VPN Tunnel. Format: projects/{project_id}/regions/{region}/vpnTunnels/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#vpn_tunnel GoogleNetworkManagementVpcFlowLogsConfig#vpn_tunnel}

---

### GoogleNetworkManagementVpcFlowLogsConfigTimeouts <a name="GoogleNetworkManagementVpcFlowLogsConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.Initializer"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

const googleNetworkManagementVpcFlowLogsConfigTimeouts: googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#create GoogleNetworkManagementVpcFlowLogsConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#delete GoogleNetworkManagementVpcFlowLogsConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#update GoogleNetworkManagementVpcFlowLogsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#create GoogleNetworkManagementVpcFlowLogsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#delete GoogleNetworkManagementVpcFlowLogsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_management_vpc_flow_logs_config#update GoogleNetworkManagementVpcFlowLogsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference <a name="GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkManagementVpcFlowLogsConfig } from '@cdktf/provider-google-beta'

new googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkManagementVpcFlowLogsConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkManagementVpcFlowLogsConfig.GoogleNetworkManagementVpcFlowLogsConfigTimeouts">GoogleNetworkManagementVpcFlowLogsConfigTimeouts</a>

---



