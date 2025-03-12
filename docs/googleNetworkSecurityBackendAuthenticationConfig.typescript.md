# `googleNetworkSecurityBackendAuthenticationConfig` Submodule <a name="`googleNetworkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

new googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig(scope: Construct, id: string, config: GoogleNetworkSecurityBackendAuthenticationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig">GoogleNetworkSecurityBackendAuthenticationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">resetWellKnownRoots</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityBackendAuthenticationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```typescript
public resetTrustConfig(): void
```

##### `resetWellKnownRoots` <a name="resetWellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```typescript
public resetWellKnownRoots(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityBackendAuthenticationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">trustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">wellKnownRootsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig">trustConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">wellKnownRoots</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityBackendAuthenticationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```typescript
public readonly trustConfigInput: string;
```

- *Type:* string

---

##### `wellKnownRootsInput`<sup>Optional</sup> <a name="wellKnownRootsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```typescript
public readonly wellKnownRootsInput: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

---

##### `wellKnownRoots`<sup>Required</sup> <a name="wellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```typescript
public readonly wellKnownRoots: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

const googleNetworkSecurityBackendAuthenticationConfigConfig: googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name">name</a></code> | <code>string</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description">description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">trustConfig</a></code> | <code>string</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">wellKnownRoots</a></code> | <code>string</code> | Well known roots to use for server certificate validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#name GoogleNetworkSecurityBackendAuthenticationConfig#name}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#client_certificate GoogleNetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#description GoogleNetworkSecurityBackendAuthenticationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#labels GoogleNetworkSecurityBackendAuthenticationConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#location GoogleNetworkSecurityBackendAuthenticationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityBackendAuthenticationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#timeouts GoogleNetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#trust_config GoogleNetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `wellKnownRoots`<sup>Optional</sup> <a name="wellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```typescript
public readonly wellKnownRoots: string;
```

- *Type:* string

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#well_known_roots GoogleNetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### GoogleNetworkSecurityBackendAuthenticationConfigTimeouts <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

const googleNetworkSecurityBackendAuthenticationConfigTimeouts: googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityBackendAuthenticationConfig } from '@cdktf/provider-google-beta'

new googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityBackendAuthenticationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---



