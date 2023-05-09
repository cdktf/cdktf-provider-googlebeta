# `google_workstations_workstation_config`

Refer to the Terraform Registory for docs: [`google_workstations_workstation_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config).

# `googleWorkstationsWorkstationConfig` Submodule <a name="`googleWorkstationsWorkstationConfig` Submodule" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationConfigA <a name="GoogleWorkstationsWorkstationConfigA" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA(scope: Construct, id: string, config: GoogleWorkstationsWorkstationConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig">GoogleWorkstationsWorkstationConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig">GoogleWorkstationsWorkstationConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories">putPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetPersistentDirectories">resetPersistentDirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer"></a>

```typescript
public putContainer(value: GoogleWorkstationsWorkstationConfigContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: GoogleWorkstationsWorkstationConfigEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost"></a>

```typescript
public putHost(value: GoogleWorkstationsWorkstationConfigHost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

---

##### `putPersistentDirectories` <a name="putPersistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```typescript
public putPersistentDirectories(value: IResolvable | GoogleWorkstationsWorkstationConfigPersistentDirectories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleWorkstationsWorkstationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPersistentDirectories` <a name="resetPersistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```typescript
public resetPersistentDirectories(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList">GoogleWorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference">GoogleWorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.degraded">degraded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference">GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.host">host</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference">GoogleWorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectories">persistentDirectories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList">GoogleWorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference">GoogleWorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.hostInput">hostInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectoriesInput">persistentDirectoriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterIdInput">workstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigIdInput">workstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.conditions"></a>

```typescript
public readonly conditions: GoogleWorkstationsWorkstationConfigConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList">GoogleWorkstationsWorkstationConfigConditionsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.container"></a>

```typescript
public readonly container: GoogleWorkstationsWorkstationConfigContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference">GoogleWorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.degraded"></a>

```typescript
public readonly degraded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference">GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.host"></a>

```typescript
public readonly host: GoogleWorkstationsWorkstationConfigHostOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference">GoogleWorkstationsWorkstationConfigHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `persistentDirectories`<sup>Required</sup> <a name="persistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```typescript
public readonly persistentDirectories: GoogleWorkstationsWorkstationConfigPersistentDirectoriesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList">GoogleWorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference">GoogleWorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.containerInput"></a>

```typescript
public readonly containerInput: GoogleWorkstationsWorkstationConfigContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: GoogleWorkstationsWorkstationConfigEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.hostInput"></a>

```typescript
public readonly hostInput: GoogleWorkstationsWorkstationConfigHost;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `persistentDirectoriesInput`<sup>Optional</sup> <a name="persistentDirectoriesInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```typescript
public readonly persistentDirectoriesInput: IResolvable | GoogleWorkstationsWorkstationConfigPersistentDirectories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleWorkstationsWorkstationConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a> | cdktf.IResolvable

---

##### `workstationClusterIdInput`<sup>Optional</sup> <a name="workstationClusterIdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```typescript
public readonly workstationClusterIdInput: string;
```

- *Type:* string

---

##### `workstationConfigIdInput`<sup>Optional</sup> <a name="workstationConfigIdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```typescript
public readonly workstationConfigIdInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationConfigAConfig <a name="GoogleWorkstationsWorkstationConfigAConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigAConfig: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.location">location</a></code> | <code>string</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationClusterId">workstationClusterId</a></code> | <code>string</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationConfigId">workstationConfigId</a></code> | <code>string</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.host">host</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.persistentDirectories">persistentDirectories</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | persistent_directories block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#location GoogleWorkstationsWorkstationConfigA#location}

---

##### `workstationClusterId`<sup>Required</sup> <a name="workstationClusterId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```typescript
public readonly workstationClusterId: string;
```

- *Type:* string

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#workstation_cluster_id GoogleWorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstationConfigId`<sup>Required</sup> <a name="workstationConfigId" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```typescript
public readonly workstationConfigId: string;
```

- *Type:* string

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#workstation_config_id GoogleWorkstationsWorkstationConfigA#workstation_config_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified annotations. This is distinct from labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#annotations GoogleWorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.container"></a>

```typescript
public readonly container: GoogleWorkstationsWorkstationConfigContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#container GoogleWorkstationsWorkstationConfigA#container}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#display_name GoogleWorkstationsWorkstationConfigA#display_name}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: GoogleWorkstationsWorkstationConfigEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#encryption_key GoogleWorkstationsWorkstationConfigA#encryption_key}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.host"></a>

```typescript
public readonly host: GoogleWorkstationsWorkstationConfigHost;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#host GoogleWorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#labels GoogleWorkstationsWorkstationConfigA#labels}

---

##### `persistentDirectories`<sup>Optional</sup> <a name="persistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```typescript
public readonly persistentDirectories: IResolvable | GoogleWorkstationsWorkstationConfigPersistentDirectories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#persistent_directories GoogleWorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleWorkstationsWorkstationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#timeouts GoogleWorkstationsWorkstationConfigA#timeouts}

---

### GoogleWorkstationsWorkstationConfigConditions <a name="GoogleWorkstationsWorkstationConfigConditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigConditions: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions = { ... }
```


### GoogleWorkstationsWorkstationConfigContainer <a name="GoogleWorkstationsWorkstationConfigContainer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigContainer: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.args">args</a></code> | <code>string[]</code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.command">command</a></code> | <code>string[]</code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Environment variables passed to the container. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.image">image</a></code> | <code>string</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.runAsUser">runAsUser</a></code> | <code>number</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.workingDir">workingDir</a></code> | <code>string</code> | If set, overrides the default DIR specified by the image. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#args GoogleWorkstationsWorkstationConfigA#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#command GoogleWorkstationsWorkstationConfigA#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#env GoogleWorkstationsWorkstationConfigA#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#image GoogleWorkstationsWorkstationConfigA#image}

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#run_as_user GoogleWorkstationsWorkstationConfigA#run_as_user}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#working_dir GoogleWorkstationsWorkstationConfigA#working_dir}

---

### GoogleWorkstationsWorkstationConfigEncryptionKey <a name="GoogleWorkstationsWorkstationConfigEncryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigEncryptionKey: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKey">kmsKey</a></code> | <code>string</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account to use with the specified KMS key. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#kms_key GoogleWorkstationsWorkstationConfigA#kms_key}

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#kms_key_service_account GoogleWorkstationsWorkstationConfigA#kms_key_service_account}

---

### GoogleWorkstationsWorkstationConfigHost <a name="GoogleWorkstationsWorkstationConfigHost" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigHost: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.property.gceInstance">gceInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `gceInstance`<sup>Optional</sup> <a name="gceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.property.gceInstance"></a>

```typescript
public readonly gceInstance: GoogleWorkstationsWorkstationConfigHostGceInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#gce_instance GoogleWorkstationsWorkstationConfigA#gce_instance}

---

### GoogleWorkstationsWorkstationConfigHostGceInstance <a name="GoogleWorkstationsWorkstationConfigHostGceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigHostGceInstance: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">disablePublicIpAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.machineType">machineType</a></code> | <code>string</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.poolSize">poolSize</a></code> | <code>number</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.tags">tags</a></code> | <code>string[]</code> | Network tags to add to the Compute Engine machines backing the Workstations. |

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#confidential_instance_config GoogleWorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `disablePublicIpAddresses`<sup>Optional</sup> <a name="disablePublicIpAddresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```typescript
public readonly disablePublicIpAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#disable_public_ip_addresses GoogleWorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#service_account GoogleWorkstationsWorkstationConfigA#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#shielded_instance_config GoogleWorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#tags GoogleWorkstationsWorkstationConfigA#tags}

---

### GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance has confidential compute enabled. |

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#enable_confidential_compute GoogleWorkstationsWorkstationConfigA#enable_confidential_compute}

---

### GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the instance has the vTPM enabled. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#enable_integrity_monitoring GoogleWorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#enable_secure_boot GoogleWorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#enable_vtpm GoogleWorkstationsWorkstationConfigA#enable_vtpm}

---

### GoogleWorkstationsWorkstationConfigPersistentDirectories <a name="GoogleWorkstationsWorkstationConfigPersistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigPersistentDirectories: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.gcePd">gcePd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.mountPath">mountPath</a></code> | <code>string</code> | Location of this directory in the running workstation. |

---

##### `gcePd`<sup>Optional</sup> <a name="gcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```typescript
public readonly gcePd: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#gce_pd GoogleWorkstationsWorkstationConfigA#gce_pd}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#mount_path GoogleWorkstationsWorkstationConfigA#mount_path}

---

### GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigPersistentDirectoriesGcePd: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">diskType</a></code> | <code>string</code> | Type of the disk to use. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">fsType</a></code> | <code>string</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">reclaimPolicy</a></code> | <code>string</code> | What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">sizeGb</a></code> | <code>number</code> | Size of the disk in GB. Must be empty if sourceSnapshot is set. |

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Type of the disk to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#fs_type GoogleWorkstationsWorkstationConfigA#fs_type}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```typescript
public readonly reclaimPolicy: string;
```

- *Type:* string

What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#reclaim_policy GoogleWorkstationsWorkstationConfigA#reclaim_policy}

---

##### `sizeGb`<sup>Optional</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Size of the disk in GB. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#size_gb GoogleWorkstationsWorkstationConfigA#size_gb}

---

### GoogleWorkstationsWorkstationConfigTimeouts <a name="GoogleWorkstationsWorkstationConfigTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

const googleWorkstationsWorkstationConfigTimeouts: googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationConfigConditionsList <a name="GoogleWorkstationsWorkstationConfigConditionsList" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get"></a>

```typescript
public get(index: number): GoogleWorkstationsWorkstationConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleWorkstationsWorkstationConfigConditionsOutputReference <a name="GoogleWorkstationsWorkstationConfigConditionsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions">GoogleWorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions">GoogleWorkstationsWorkstationConfigConditions</a>

---


### GoogleWorkstationsWorkstationConfigContainerOutputReference <a name="GoogleWorkstationsWorkstationConfigContainerOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```typescript
public resetRunAsUser(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">runAsUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: number;
```

- *Type:* number

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

---


### GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```typescript
public resetEnableConfidentialCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```typescript
public readonly enableConfidentialComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">resetDisablePublicIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```typescript
public putConfidentialInstanceConfig(value: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```typescript
public resetConfidentialInstanceConfig(): void
```

##### `resetDisablePublicIpAddresses` <a name="resetDisablePublicIpAddresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```typescript
public resetDisablePublicIpAddresses(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetPoolSize` <a name="resetPoolSize" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```typescript
public resetPoolSize(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">disablePublicIpAddressesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">disablePublicIpAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">poolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```typescript
public readonly confidentialInstanceConfigInput: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `disablePublicIpAddressesInput`<sup>Optional</sup> <a name="disablePublicIpAddressesInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```typescript
public readonly disablePublicIpAddressesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```typescript
public readonly poolSizeInput: number;
```

- *Type:* number

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `disablePublicIpAddresses`<sup>Required</sup> <a name="disablePublicIpAddresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```typescript
public readonly disablePublicIpAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigHostGceInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### GoogleWorkstationsWorkstationConfigHostOutputReference <a name="GoogleWorkstationsWorkstationConfigHostOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance">putGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resetGceInstance">resetGceInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGceInstance` <a name="putGceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```typescript
public putGceInstance(value: GoogleWorkstationsWorkstationConfigHostGceInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

---

##### `resetGceInstance` <a name="resetGceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```typescript
public resetGceInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstance">gceInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">gceInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gceInstance`<sup>Required</sup> <a name="gceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```typescript
public readonly gceInstance: GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `gceInstanceInput`<sup>Optional</sup> <a name="gceInstanceInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```typescript
public readonly gceInstanceInput: GoogleWorkstationsWorkstationConfigHostGceInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigHost;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">resetSizeGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```typescript
public resetReclaimPolicy(): void
```

##### `resetSizeGb` <a name="resetSizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```typescript
public resetSizeGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">reclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```typescript
public readonly reclaimPolicyInput: string;
```

- *Type:* string

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```typescript
public readonly reclaimPolicy: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesList <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```typescript
public get(index: number): GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleWorkstationsWorkstationConfigPersistentDirectories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>[]

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">putGcePd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">resetGcePd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcePd` <a name="putGcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```typescript
public putGcePd(value: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `resetGcePd` <a name="resetGcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```typescript
public resetGcePd(): void
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">gcePd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">gcePdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcePd`<sup>Required</sup> <a name="gcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```typescript
public readonly gcePd: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `gcePdInput`<sup>Optional</sup> <a name="gcePdInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```typescript
public readonly gcePdInput: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigPersistentDirectories | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a> | cdktf.IResolvable

---


### GoogleWorkstationsWorkstationConfigTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleWorkstationsWorkstationConfig } from '@cdktf/provider-google-beta'

new googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleWorkstationsWorkstationConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a> | cdktf.IResolvable

---



