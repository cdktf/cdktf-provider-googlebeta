# `googleComputeRegionNetworkEndpointGroup` Submodule <a name="`googleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkEndpointGroup <a name="GoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup(scope: Construct, id: string, config: GoogleComputeRegionNetworkEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig">GoogleComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig">GoogleComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine">putAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction">putCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun">putCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData">putPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment">putServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine">resetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction">resetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun">resetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">resetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData">resetPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService">resetPscTargetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment">resetServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngine` <a name="putAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```typescript
public putAppEngine(value: GoogleComputeRegionNetworkEndpointGroupAppEngine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `putCloudFunction` <a name="putCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```typescript
public putCloudFunction(value: GoogleComputeRegionNetworkEndpointGroupCloudFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `putCloudRun` <a name="putCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```typescript
public putCloudRun(value: GoogleComputeRegionNetworkEndpointGroupCloudRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `putPscData` <a name="putPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData"></a>

```typescript
public putPscData(value: GoogleComputeRegionNetworkEndpointGroupPscData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putPscData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---

##### `putServerlessDeployment` <a name="putServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment"></a>

```typescript
public putServerlessDeployment(value: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putServerlessDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionNetworkEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `resetAppEngine` <a name="resetAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```typescript
public resetAppEngine(): void
```

##### `resetCloudFunction` <a name="resetCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```typescript
public resetCloudFunction(): void
```

##### `resetCloudRun` <a name="resetCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```typescript
public resetCloudRun(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkEndpointType` <a name="resetNetworkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```typescript
public resetNetworkEndpointType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscData` <a name="resetPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscData"></a>

```typescript
public resetPscData(): void
```

##### `resetPscTargetService` <a name="resetPscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```typescript
public resetPscTargetService(): void
```

##### `resetServerlessDeployment` <a name="resetServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetServerlessDeployment"></a>

```typescript
public resetServerlessDeployment(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData">pscData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment">serverlessDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput">appEngineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">cloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput">cloudRunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput">pscDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">pscTargetServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput">serverlessDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">pscTargetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```typescript
public readonly appEngine: GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference">GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `cloudRun`<sup>Required</sup> <a name="cloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```typescript
public readonly cloudRun: GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference">GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `pscData`<sup>Required</sup> <a name="pscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscData"></a>

```typescript
public readonly pscData: GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference">GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serverlessDeployment`<sup>Required</sup> <a name="serverlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment"></a>

```typescript
public readonly serverlessDeployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference">GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference">GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `appEngineInput`<sup>Optional</sup> <a name="appEngineInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```typescript
public readonly appEngineInput: GoogleComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `cloudFunctionInput`<sup>Optional</sup> <a name="cloudFunctionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```typescript
public readonly cloudFunctionInput: GoogleComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `cloudRunInput`<sup>Optional</sup> <a name="cloudRunInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```typescript
public readonly cloudRunInput: GoogleComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```typescript
public readonly networkEndpointTypeInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscDataInput`<sup>Optional</sup> <a name="pscDataInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscDataInput"></a>

```typescript
public readonly pscDataInput: GoogleComputeRegionNetworkEndpointGroupPscData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---

##### `pscTargetServiceInput`<sup>Optional</sup> <a name="pscTargetServiceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```typescript
public readonly pscTargetServiceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverlessDeploymentInput`<sup>Optional</sup> <a name="serverlessDeploymentInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.serverlessDeploymentInput"></a>

```typescript
public readonly serverlessDeploymentInput: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pscTargetService`<sup>Required</sup> <a name="pscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```typescript
public readonly pscTargetService: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngine <a name="GoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupAppEngine: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service">service</a></code> | <code>string</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version">version</a></code> | <code>string</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupCloudFunction: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function">function</a></code> | <code>string</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse function field from a request URL. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#function GoogleComputeRegionNetworkEndpointGroup#function}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupCloudRun <a name="GoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupCloudRun: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service">service</a></code> | <code>string</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag">tag</a></code> | <code>string</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse service and tag fields from a request URL. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#service GoogleComputeRegionNetworkEndpointGroup#service}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#tag GoogleComputeRegionNetworkEndpointGroup#tag}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

### GoogleComputeRegionNetworkEndpointGroupConfig <a name="GoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupConfig: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network">network</a></code> | <code>string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData">pscData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | psc_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">pscTargetService</a></code> | <code>string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment">serverlessDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | serverless_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#name GoogleComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#region GoogleComputeRegionNetworkEndpointGroup#region}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```typescript
public readonly appEngine: GoogleComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#app_engine GoogleComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloudFunction`<sup>Optional</sup> <a name="cloudFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: GoogleComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_function GoogleComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloudRun`<sup>Optional</sup> <a name="cloudRun" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```typescript
public readonly cloudRun: GoogleComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#cloud_run GoogleComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#description GoogleComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#id GoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network GoogleComputeRegionNetworkEndpointGroup#network}

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "GCE_VM_IP_PORTMAP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#network_endpoint_type GoogleComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#project GoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `pscData`<sup>Optional</sup> <a name="pscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscData"></a>

```typescript
public readonly pscData: GoogleComputeRegionNetworkEndpointGroupPscData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

psc_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_data GoogleComputeRegionNetworkEndpointGroup#psc_data}

---

##### `pscTargetService`<sup>Optional</sup> <a name="pscTargetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```typescript
public readonly pscTargetService: string;
```

- *Type:* string

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#psc_target_service GoogleComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `serverlessDeployment`<sup>Optional</sup> <a name="serverlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.serverlessDeployment"></a>

```typescript
public readonly serverlessDeployment: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

serverless_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#serverless_deployment GoogleComputeRegionNetworkEndpointGroup#serverless_deployment}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#subnetwork GoogleComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#timeouts GoogleComputeRegionNetworkEndpointGroup#timeouts}

---

### GoogleComputeRegionNetworkEndpointGroupPscData <a name="GoogleComputeRegionNetworkEndpointGroupPscData" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupPscData: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort">producerPort</a></code> | <code>string</code> | The PSC producer port to use when consumer PSC NEG connects to a producer. |

---

##### `producerPort`<sup>Optional</sup> <a name="producerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData.property.producerPort"></a>

```typescript
public readonly producerPort: string;
```

- *Type:* string

The PSC producer port to use when consumer PSC NEG connects to a producer.

If
this flag isn't specified for a PSC NEG with endpoint type
private-service-connect, then PSC NEG will be connected to a first port in the
available PSC producer port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#producer_port GoogleComputeRegionNetworkEndpointGroup#producer_port}

---

### GoogleComputeRegionNetworkEndpointGroupServerlessDeployment <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeployment" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupServerlessDeployment: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform">platform</a></code> | <code>string</code> | The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource">resource</a></code> | <code>string</code> | The user-defined name of the workload/instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse platform-specific fields from a request URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version">version</a></code> | <code>string</code> | The optional resource version. |

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The platform of the NEG backend target(s). Possible values: API Gateway: apigateway.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#platform GoogleComputeRegionNetworkEndpointGroup#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The user-defined name of the workload/instance.

This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#resource GoogleComputeRegionNetworkEndpointGroup#resource}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse platform-specific fields from a request URL.

URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#url_mask GoogleComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The optional resource version.

The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#version GoogleComputeRegionNetworkEndpointGroup#version}

---

### GoogleComputeRegionNetworkEndpointGroupTimeouts <a name="GoogleComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkEndpointGroupTimeouts: googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#create GoogleComputeRegionNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_network_endpoint_group#delete GoogleComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupAppEngine">GoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudFunction">GoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupCloudRun">GoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---


### GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort">resetProducerPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProducerPort` <a name="resetProducerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resetProducerPort"></a>

```typescript
public resetProducerPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput">producerPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort">producerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `producerPortInput`<sup>Optional</sup> <a name="producerPortInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPortInput"></a>

```typescript
public readonly producerPortInput: string;
```

- *Type:* string

---

##### `producerPort`<sup>Required</sup> <a name="producerPort" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort"></a>

```typescript
public readonly producerPort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkEndpointGroupPscData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupPscData">GoogleComputeRegionNetworkEndpointGroupPscData</a>

---


### GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkEndpointGroupServerlessDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupServerlessDeployment">GoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---


### GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkEndpointGroup } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroupTimeouts">GoogleComputeRegionNetworkEndpointGroupTimeouts</a>

---



