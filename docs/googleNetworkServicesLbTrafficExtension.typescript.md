# `googleNetworkServicesLbTrafficExtension` Submodule <a name="`googleNetworkServicesLbTrafficExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbTrafficExtension <a name="GoogleNetworkServicesLbTrafficExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension google_network_services_lb_traffic_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension(scope: Construct, id: string, config: GoogleNetworkServicesLbTrafficExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig">GoogleNetworkServicesLbTrafficExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig">GoogleNetworkServicesLbTrafficExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains"></a>

```typescript
public putExtensionChains(value: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesLbTrafficExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesLbTrafficExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesLbTrafficExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbTrafficExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput">forwardingRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains"></a>

```typescript
public readonly extensionChains: GoogleNetworkServicesLbTrafficExtensionExtensionChainsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput"></a>

```typescript
public readonly extensionChainsInput: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]

---

##### `forwardingRulesInput`<sup>Optional</sup> <a name="forwardingRulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput"></a>

```typescript
public readonly forwardingRulesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesLbTrafficExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbTrafficExtensionConfig <a name="GoogleNetworkServicesLbTrafficExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbTrafficExtensionConfig: googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location">location</a></code> | <code>string</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name">name</a></code> | <code>string</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains"></a>

```typescript
public readonly extensionChains: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#extension_chains GoogleNetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#forwarding_rules GoogleNetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#location GoogleNetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#description GoogleNetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#labels GoogleNetworkServicesLbTrafficExtension#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#load_balancing_scheme GoogleNetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbTrafficExtensionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#timeouts GoogleNetworkServicesLbTrafficExtension#timeouts}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChains <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbTrafficExtensionExtensionChains: googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions">extensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name">name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions"></a>

```typescript
public readonly extensions: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#extensions GoogleNetworkServicesLbTrafficExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#match_condition GoogleNetworkServicesLbTrafficExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbTrafficExtensionExtensionChainsExtensions: googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>string</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>string</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>string</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#service GoogleNetworkServicesLbTrafficExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#authority GoogleNetworkServicesLbTrafficExtension#authority}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#fail_open GoogleNetworkServicesLbTrafficExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#forward_headers GoogleNetworkServicesLbTrafficExtension#forward_headers}

---

##### `supportedEvents`<sup>Optional</sup> <a name="supportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

A set of events during request or response processing for which this extension is called.

This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#supported_events GoogleNetworkServicesLbTrafficExtension#supported_events}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#timeout GoogleNetworkServicesLbTrafficExtension#timeout}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition: googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#cel_expression GoogleNetworkServicesLbTrafficExtension#cel_expression}

---

### GoogleNetworkServicesLbTrafficExtensionTimeouts <a name="GoogleNetworkServicesLbTrafficExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

const googleNetworkServicesLbTrafficExtensionTimeouts: googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">resetSupportedEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthority` <a name="resetAuthority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```typescript
public resetAuthority(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```typescript
public resetForwardHeaders(): void
```

##### `resetSupportedEvents` <a name="resetSupportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```typescript
public resetSupportedEvents(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```typescript
public readonly authorityInput: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```typescript
public readonly forwardHeadersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `supportedEventsInput`<sup>Optional</sup> <a name="supportedEventsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```typescript
public readonly supportedEventsInput: string[];
```

- *Type:* string[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```typescript
public readonly authority: string;
```

- *Type:* string

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `supportedEvents`<sup>Required</sup> <a name="supportedEvents" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>[]

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```typescript
public readonly celExpressionInput: string;
```

- *Type:* string

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions"></a>

```typescript
public putExtensions(value: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions"></a>

```typescript
public readonly extensions: GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>[]

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbTrafficExtensionExtensionChains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>

---


### GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbTrafficExtension } from '@cdktf/provider-google-beta'

new googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbTrafficExtensionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

---



