# `googleComputeExternalVpnGateway` Submodule <a name="`googleComputeExternalVpnGateway` Submodule" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeExternalVpnGateway <a name="GoogleComputeExternalVpnGateway" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway google_compute_external_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

new googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway(scope: Construct, id: string, config: GoogleComputeExternalVpnGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig">GoogleComputeExternalVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig">GoogleComputeExternalVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putInterface">putInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetRedundancyType">resetRedundancyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInterface` <a name="putInterface" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putInterface"></a>

```typescript
public putInterface(value: IResolvable | GoogleComputeExternalVpnGatewayInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeExternalVpnGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRedundancyType` <a name="resetRedundancyType" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetRedundancyType"></a>

```typescript
public resetRedundancyType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeExternalVpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isConstruct"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformElement"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformResource"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeExternalVpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeExternalVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeExternalVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeExternalVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.interface">interface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList">GoogleComputeExternalVpnGatewayInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference">GoogleComputeExternalVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.interfaceInput">interfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.redundancyTypeInput">redundancyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.redundancyType">redundancyType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.interface"></a>

```typescript
public readonly interface: GoogleComputeExternalVpnGatewayInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList">GoogleComputeExternalVpnGatewayInterfaceList</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeExternalVpnGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference">GoogleComputeExternalVpnGatewayTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: IResolvable | GoogleComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `redundancyTypeInput`<sup>Optional</sup> <a name="redundancyTypeInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.redundancyTypeInput"></a>

```typescript
public readonly redundancyTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeExternalVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `redundancyType`<sup>Required</sup> <a name="redundancyType" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.redundancyType"></a>

```typescript
public readonly redundancyType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeExternalVpnGatewayConfig <a name="GoogleComputeExternalVpnGatewayConfig" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

const googleComputeExternalVpnGatewayConfig: googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#id GoogleComputeExternalVpnGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.interface">interface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]</code> | interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels for the external VPN gateway resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#project GoogleComputeExternalVpnGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.redundancyType">redundancyType</a></code> | <code>string</code> | Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#name GoogleComputeExternalVpnGateway#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#description GoogleComputeExternalVpnGateway#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#id GoogleComputeExternalVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.interface"></a>

```typescript
public readonly interface: IResolvable | GoogleComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]

interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#interface GoogleComputeExternalVpnGateway#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels for the external VPN gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#labels GoogleComputeExternalVpnGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#project GoogleComputeExternalVpnGateway#project}.

---

##### `redundancyType`<sup>Optional</sup> <a name="redundancyType" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.redundancyType"></a>

```typescript
public readonly redundancyType: string;
```

- *Type:* string

Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#redundancy_type GoogleComputeExternalVpnGateway#redundancy_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeExternalVpnGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#timeouts GoogleComputeExternalVpnGateway#timeouts}

---

### GoogleComputeExternalVpnGatewayInterface <a name="GoogleComputeExternalVpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

const googleComputeExternalVpnGatewayInterface: googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.id">id</a></code> | <code>number</code> | The numeric ID for this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address of the interface in the external VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | IPv6 address of the interface in the external VPN gateway. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

The numeric ID for this interface.

Allowed values are based on the redundancy type
of this external VPN gateway
* '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
* '0, 1 - TWO_IPS_REDUNDANCY'
* '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#id GoogleComputeExternalVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address of the interface in the external VPN gateway.

Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#ip_address GoogleComputeExternalVpnGateway#ip_address}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

IPv6 address of the interface in the external VPN gateway.

This IPv6
address can be either from your on-premise gateway or another Cloud
provider's VPN gateway, it cannot be an IP address from Google Compute
Engine. Must specify an IPv6 address (not IPV4-mapped) using any format
described in RFC 4291 (e.g. 2001:db8:0:0:2d9:51:0:0). The output format
is RFC 5952 format (e.g. 2001:db8::2d9:51:0:0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#ipv6_address GoogleComputeExternalVpnGateway#ipv6_address}

---

### GoogleComputeExternalVpnGatewayTimeouts <a name="GoogleComputeExternalVpnGatewayTimeouts" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

const googleComputeExternalVpnGatewayTimeouts: googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#create GoogleComputeExternalVpnGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#delete GoogleComputeExternalVpnGateway#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#update GoogleComputeExternalVpnGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#create GoogleComputeExternalVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#delete GoogleComputeExternalVpnGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_external_vpn_gateway#update GoogleComputeExternalVpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeExternalVpnGatewayInterfaceList <a name="GoogleComputeExternalVpnGatewayInterfaceList" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

new googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.get"></a>

```typescript
public get(index: number): GoogleComputeExternalVpnGatewayInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeExternalVpnGatewayInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>[]

---


### GoogleComputeExternalVpnGatewayInterfaceOutputReference <a name="GoogleComputeExternalVpnGatewayInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

new googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeExternalVpnGatewayInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayInterface">GoogleComputeExternalVpnGatewayInterface</a>

---


### GoogleComputeExternalVpnGatewayTimeoutsOutputReference <a name="GoogleComputeExternalVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeExternalVpnGateway } from '@cdktf/provider-google-beta'

new googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeExternalVpnGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeExternalVpnGateway.GoogleComputeExternalVpnGatewayTimeouts">GoogleComputeExternalVpnGatewayTimeouts</a>

---



